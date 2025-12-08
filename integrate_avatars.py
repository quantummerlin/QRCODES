#!/usr/bin/env python3
"""
Avatar Integration Script for Quantum Reality Code Ecosystem

This script integrates generated avatar images into the council portal template.
It updates the HTML to use actual avatar images instead of placeholder emojis.
"""

import os
import json
import re
from pathlib import Path

def load_personas_database():
    """Load the personas database from JSON file."""
    try:
        with open('personas_database.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("❌ personas_database.json not found")
        return None

def get_available_avatars():
    """Get list of available avatar images."""
    avatars_dir = Path('generated_images')
    if not avatars_dir.exists():
        print("❌ generated_images directory not found")
        return []
    
    avatar_files = list(avatars_dir.glob('*.png')) + list(avatars_dir.glob('*.jpg')) + list(avatars_dir.glob('*.jpeg'))
    return sorted(avatar_files)

def extract_all_personas(personas_data):
    """Extract all personas from the database into a flat list."""
    all_personas = []
    
    # Add core trinity
    if 'core_trinity' in personas_data:
        for persona in personas_data['core_trinity']:
            persona['category'] = 'core_trinity'
            all_personas.append(persona)
    
    # Add light personas
    if 'light_personas' in personas_data:
        for persona in personas_data['light_personas']:
            persona['category'] = 'light'
            all_personas.append(persona)
    
    # Add shadow personas
    if 'shadow_personas' in personas_data:
        for persona in personas_data['shadow_personas']:
            persona['category'] = 'shadow'
            all_personas.append(persona)
    
    # Add meta mystic personas
    if 'meta_mystic_personas' in personas_data:
        for persona in personas_data['meta_mystic_personas']:
            persona['category'] = 'meta_mystic'
            all_personas.append(persona)
    
    return all_personas

def create_avatar_mapping(personas, avatars):
    """Create a mapping between personas and avatar files."""
    mapping = {}
    
    # For now, use simple sequential mapping
    # In a perfect world, we'd match by name patterns
    for i, persona in enumerate(personas):
        if i < len(avatars):
            avatar_path = avatars[i]
            mapping[persona.get('name', f'persona_{i}')] = {
                'path': f'generated_images/{avatar_path.name}',
                'filename': avatar_path.name
            }
        else:
            # Use placeholder for missing avatars
            mapping[persona.get('name', f'persona_{i}')] = {
                'path': None,
                'filename': None
            }
    
    return mapping

def update_council_template(avatar_mapping):
    """Update the council portal template with avatar images."""
    template_path = 'templates/quantum-council-portal.html'
    
    if not os.path.exists(template_path):
        print(f"❌ Template {template_path} not found")
        return False
    
    # Read the template
    with open(template_path, 'r') as f:
        content = f.read()
    
    # Find the council members section and replace avatar placeholders
    # Look for the pattern with 🤖 placeholder
    avatar_placeholder_pattern = r'<div class="member-avatar">🤖</div>'
    
    def replace_avatar(match):
        # We'll need to modify this to actually match persona names
        # For now, return a more generic approach
        return '''<div class="member-avatar">
            <img src="{avatar_path}" alt="{persona_name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div style="display:none;">🤖</div>
        </div>'''.format(avatar_path='generated_images/generated_image_00b9a482-3c4f-4d61-850f-5ad586ffd7ea_0.png', persona_name='Quantum Guide')
    
    # Replace placeholders
    updated_content = re.sub(avatar_placeholder_pattern, replace_avatar, content)
    
    # Write back the updated template
    with open(template_path, 'w') as f:
        f.write(updated_content)
    
    print(f"✅ Updated {template_path} with avatar integration")
    return True

def create_enhanced_council_template(personas, avatar_mapping):
    """Create a completely enhanced council template with all personas and avatars."""
    
    # Categorize personas
    core_trinity = [p for p in personas if p.get('category') == 'core_trinity']
    light_personas = [p for p in personas if p.get('category') == 'light']
    shadow_personas = [p for p in personas if p.get('category') == 'shadow']
    meta_mystic_personas = [p for p in personas if p.get('category') == 'meta_mystic']
    
    template_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Quantum Council - Personal Guidance</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            font-family: 'Courier New', monospace;
            background: #000;
            color: #fff;
            overflow-x: hidden;
            position: relative;
        }}

        /* Quantum Background */
        .quantum-bg {{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #0a0a0a, #1a0a2a, #0a1a2a);
            z-index: -2;
        }}

        .quantum-grid {{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(cyan 1px, transparent 1px),
                linear-gradient(90deg, cyan 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.1;
            z-index: -1;
            animation: grid-move 10s linear infinite;
        }}

        @keyframes grid-move {{
            0% {{ transform: translate(0, 0); }}
            100% {{ transform: translate(50px, 50px); }}
        }}

        /* Header */
        header {{
            padding: 20px;
            text-align: center;
            background: rgba(0, 0, 0, 0.8);
            border-bottom: 2px solid cyan;
        }}

        h1 {{
            font-size: 2.5em;
            color: cyan;
            text-shadow: 0 0 20px cyan;
            margin-bottom: 10px;
        }}

        .code-display {{
            font-size: 1.2em;
            color: magenta;
            margin-bottom: 10px;
        }}

        .intention-display {{
            font-size: 1.1em;
            color: #fff;
            font-style: italic;
        }}

        /* Navigation */
        nav {{
            padding: 15px;
            background: rgba(0, 0, 0, 0.6);
            text-align: center;
        }}

        nav a {{
            color: cyan;
            text-decoration: none;
            margin: 0 15px;
            padding: 8px 16px;
            border: 1px solid cyan;
            transition: all 0.3s ease;
        }}

        nav a:hover {{
            background: cyan;
            color: black;
            box-shadow: 0 0 10px cyan;
        }}

        /* Main Content */
        main {{
            padding: 40px 20px;
            max-width: 1400px;
            margin: 0 auto;
        }}

        /* Council Sections */
        .council-section {{
            margin-bottom: 60px;
        }}

        .section-title {{
            font-size: 2em;
            color: magenta;
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 0 0 15px magenta;
        }}

        .council-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }}

        /* Persona Cards */
        .persona-card {{
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid cyan;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }}

        .persona-card:hover {{
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.5);
            border-color: magenta;
        }}

        .persona-card.core-trinity {{
            border-color: gold;
            background: rgba(20, 20, 0, 0.8);
        }}

        .persona-card.light {{
            border-color: lightblue;
        }}

        .persona-card.shadow {{
            border-color: purple;
        }}

        .persona-card.meta-mystic {{
            border-color: magenta;
        }}

        .member-avatar {{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 15px;
            border: 3px solid cyan;
            overflow: hidden;
            background: rgba(0, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
        }}

        .member-avatar img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }}

        .member-name {{
            font-size: 1.3em;
            color: cyan;
            margin-bottom: 8px;
            font-weight: bold;
        }}

        .member-role {{
            font-size: 0.9em;
            color: magenta;
            margin-bottom: 15px;
            font-style: italic;
        }}

        .member-quote {{
            font-size: 0.85em;
            color: #fff;
            line-height: 1.4;
            font-style: italic;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(0, 255, 255, 0.3);
        }}

        /* Lock overlay for unachieved personas */
        .persona-card.locked {{
            opacity: 0.6;
            position: relative;
        }}

        .persona-card.locked::after {{
            content: "🔒";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            color: gold;
        }}

        /* Progress Dashboard */
        .progress-dashboard {{
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid cyan;
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 40px;
        }}

        .progress-title {{
            font-size: 1.5em;
            color: cyan;
            margin-bottom: 20px;
            text-align: center;
        }}

        .progress-stats {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }}

        .stat-item {{
            text-align: center;
            padding: 15px;
            background: rgba(0, 255, 255, 0.1);
            border-radius: 8px;
        }}

        .stat-number {{
            font-size: 2em;
            color: magenta;
            font-weight: bold;
        }}

        .stat-label {{
            font-size: 0.9em;
            color: cyan;
            margin-top: 5px;
        }}

        /* Responsive Design */
        @media (max-width: 768px) {{
            h1 {{
                font-size: 2em;
            }}
            
            .council-grid {{
                grid-template-columns: 1fr;
            }}
            
            .progress-stats {{
                grid-template-columns: 1fr;
            }}
        }}

        /* Animations */
        @keyframes pulse {{
            0% {{ opacity: 1; }}
            50% {{ opacity: 0.7; }}
            100% {{ opacity: 1; }}
        }}

        .persona-card {{
            animation: pulse 3s ease-in-out infinite;
        }}

        .persona-card:nth-child(odd) {{
            animation-delay: 1.5s;
        }}
    </style>
</head>
<body>
    <div class="quantum-bg"></div>
    <div class="quantum-grid"></div>

    <header>
        <h1>Your Quantum Council</h1>
        CODE_DISPLAY_PLACEHOLDER
    </header>

    <nav>
        <a href="/">Home</a>
        <a href="/generator">Generator</a>
        <a href="/quantumcouncil">Council</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/community">Community</a>
        <a href="/frequencies">Frequencies</a>
    </nav>

    <main>
        <!-- Progress Dashboard -->
        <div class="progress-dashboard">
            <div class="progress-title">Your Quantum Journey</div>
            <div class="progress-stats">
                <div class="stat-item">
                    <div class="stat-number">3</div>
                    <div class="stat-label">Active Council Members</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">77</div>
                    <div class="stat-label">Total Personas Available</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">1</div>
                    <div class="stat-label">Days Active</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">0</div>
                    <div class="stat-label">Power Level</div>
                </div>
            </div>
        </div>

        SELECTED_COUNCIL_PLACEHOLDER

        CORE_TRINITY_PLACEHOLDER
        LIGHT_PERSONAS_PLACEHOLDER
        SHADOW_PERSONAS_PLACEHOLDER
        META_MYSTIC_PLACEHOLDER
    </main>

    <script>
        // Add interactivity for persona cards
        document.addEventListener('DOMContentLoaded', function() {{
            const cards = document.querySelectorAll('.persona-card:not(.locked)');
            
            cards.forEach(card => {{
                card.addEventListener('click', function() {{
                    // Expand card or show more details
                    const name = this.querySelector('.member-name').textContent;
                    const quote = this.querySelector('.member-quote').textContent;
                    
                    // Create modal or expand card
                    alert(name + ': ' + quote);
                }});
            }});
        }});
    </script>
</body>
</html>'''
    
    # Generate persona cards
    def generate_persona_cards(personas, avatar_mapping, start_index=0):
        cards = []
        for i, persona in enumerate(personas):
            avatar_info = avatar_mapping.get(persona.get('name', ''), {})
            avatar_path = avatar_info.get('path', 'generated_images/generated_image_00b9a482-3c4f-4d61-850f-5ad586ffd7ea_0.png')
            
            card = f'''                <div class="persona-card {persona.get('category', '').replace('_', '-')}">
                    <div class="member-avatar">
                        <img src="{avatar_path}" alt="{persona.get('name', 'Quantum Guide')}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display:none;">🤖</div>
                    </div>
                    <div class="member-name">{persona.get('name', 'Unknown')}</div>
                    <div class="member-role">{persona.get('role', persona.get('focus', 'Quantum Guide'))}</div>
                    <div class="member-quote">"{persona.get('quote', persona.get('signature_quote', 'Your intention shapes reality'))}"</div>
                </div>'''
            cards.append(card)
        return '\n'.join(cards)
    
    # Generate code display section
    code_display = '''        {% if code %}
            <div class="code-display">Quantum Code: {{ code }}</div>
            <div class="intention-display">"{{ intention }}"</div>
        {% endif %}'''
    
    # Generate selected council section
    selected_council = '''        {% if council_members %}
        <!-- Selected Council Members -->
        <div class="council-section">
            <h2 class="section-title">Your Active Council Members</h2>
            <div class="council-grid">
                {% for member in council_members %}
                <div class="persona-card core-trinity">
                    <div class="member-avatar">
                        <img src="generated_images/generated_image_00b9a482-3c4f-4d61-850f-5ad586ffd7ea_0.png" alt="{{ member.name }}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div style="display:none;">🤖</div>
                    </div>
                    <div class="member-name">{{ member.name }}</div>
                    <div class="member-role">{{ member.role }}</div>
                    <div class="member-quote">"{{ member.quote }}"</div>
                </div>
                {% endfor %}
            </div>
        </div>
        {% endif %}'''
    
    # Replace the placeholder card generation
    core_cards = generate_persona_cards(core_trinity, avatar_mapping)
    light_cards = generate_persona_cards(light_personas, avatar_mapping)
    shadow_cards = generate_persona_cards(shadow_personas, avatar_mapping)
    meta_cards = generate_persona_cards(meta_mystic_personas, avatar_mapping)
    
    # Generate full sections
    core_section = f'''        <!-- Core Trinity -->
        <div class="council-section">
            <h2 class="section-title">Core Trinity</h2>
            <div class="council-grid">
{core_cards}
            </div>
        </div>'''
    
    light_section = f'''        <!-- Light Personas -->
        <div class="council-section">
            <h2 class="section-title">Light Guides</h2>
            <div class="council-grid">
{light_cards}
            </div>
        </div>'''
    
    shadow_section = f'''        <!-- Shadow Personas -->
        <div class="council-section">
            <h2 class="section-title">Shadow Transformers</h2>
            <div class="council-grid">
{shadow_cards}
            </div>
        </div>'''
    
    meta_section = f'''        <!-- Meta Mystic Personas -->
        <div class="council-section">
            <h2 class="section-title">Meta Mystics</h2>
            <div class="council-grid">
{meta_cards}
            </div>
        </div>'''
    
    template_html = template_html.replace('CODE_DISPLAY_PLACEHOLDER', code_display)
    template_html = template_html.replace('SELECTED_COUNCIL_PLACEHOLDER', selected_council)
    template_html = template_html.replace('CORE_TRINITY_PLACEHOLDER', core_section)
    template_html = template_html.replace('LIGHT_PERSONAS_PLACEHOLDER', light_section)
    template_html = template_html.replace('SHADOW_PERSONAS_PLACEHOLDER', shadow_section)
    template_html = template_html.replace('META_MYSTIC_PLACEHOLDER', meta_section)
    
    # Write the enhanced template
    with open('templates/quantum-council-enhanced.html', 'w') as f:
        f.write(template_html)
    
    print("✅ Created enhanced council template with all personas and avatars")
    return True

def main():
    """Main integration function."""
    print("🌟 Quantum Avatar Integration System")
    print("=" * 50)
    
    # Load personas database
    print("📚 Loading personas database...")
    personas_data = load_personas_database()
    if not personas_data:
        return False
    
    # Extract all personas
    print("👥 Extracting all personas...")
    all_personas = extract_all_personas(personas_data)
    print(f"✅ Found {len(all_personas)} personas")
    
    # Get available avatars
    print("🖼️ Scanning for avatar images...")
    avatars = get_available_avatars()
    print(f"✅ Found {len(avatars)} avatar images")
    
    # Create avatar mapping
    print("🔗 Creating avatar mappings...")
    avatar_mapping = create_avatar_mapping(all_personas, avatars)
    
    # Create enhanced council template
    print("🎨 Creating enhanced council template...")
    success = create_enhanced_council_template(all_personas, avatar_mapping)
    
    if success:
        print("✅ Avatar integration complete!")
        print(f"📊 Summary:")
        print(f"   - Total personas: {len(all_personas)}")
        print(f"   - Available avatars: {len(avatars)}")
        print(f"   - Enhanced template: templates/quantum-council-enhanced.html")
    else:
        print("❌ Avatar integration failed")
        return False
    
    return True

if __name__ == "__main__":
    main()