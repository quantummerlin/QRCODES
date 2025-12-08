#!/usr/bin/env python3
"""
Test script for Quantum Reality Code System
This script tests all the key functionality of the system.
"""

import requests
import json
from time import sleep

BASE_URL = "http://127.0.0.1:5001"

def test_homepage():
    """Test the homepage."""
    print("🏠 Testing homepage...")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"✅ Homepage status: {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Homepage failed: {e}")
        return False

def test_generator():
    """Test the quantum code generator."""
    print("⚡ Testing quantum code generator...")
    try:
        # Test GET request
        response = requests.get(f"{BASE_URL}/generator")
        print(f"✅ Generator page status: {response.status_code}")
        
        # Test POST request with intention
        test_intention = "I want to manifest abundance and success"
        response = requests.post(f"{BASE_URL}/generator", data={"intention": test_intention})
        print(f"✅ Code generation status: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Quantum code generation working")
            return True
        else:
            print(f"❌ Code generation failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Generator test failed: {e}")
        return False

def test_council():
    """Test the quantum council (requires session)."""
    print("👥 Testing quantum council...")
    try:
        # First generate a code to establish session
        session = requests.Session()
        test_intention = "I want to manifest abundance and success"
        response = session.post(f"{BASE_URL}/generator", data={"intention": test_intention})
        
        if response.status_code == 200:
            # Now test council access
            response = session.get(f"{BASE_URL}/quantumcouncil")
            print(f"✅ Council page status: {response.status_code}")
            
            if response.status_code == 200:
                print("✅ Quantum council access working")
                return True
            else:
                print(f"❌ Council access failed with status {response.status_code}")
                return False
        else:
            print("❌ Failed to establish session for council test")
            return False
    except Exception as e:
        print(f"❌ Council test failed: {e}")
        return False

def test_other_pages():
    """Test other pages."""
    print("📄 Testing other pages...")
    pages = [
        ("/how-it-works", "How it works"),
        ("/community", "Community hub"),
        ("/frequencies", "Quantum frequencies")
    ]
    
    all_passed = True
    for path, name in pages:
        try:
            response = requests.get(f"{BASE_URL}{path}")
            print(f"✅ {name} status: {response.status_code}")
            if response.status_code != 200:
                all_passed = False
        except Exception as e:
            print(f"❌ {name} failed: {e}")
            all_passed = False
    
    return all_passed

def test_api_endpoints():
    """Test API endpoints."""
    print("🔌 Testing API endpoints...")
    try:
        # Test share code API
        test_data = {"code": "12345", "platform": "facebook"}
        response = requests.post(f"{BASE_URL}/api/share-code", json=test_data)
        print(f"✅ Share code API status: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ API endpoints working")
            return True
        else:
            print(f"❌ API endpoint failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API test failed: {e}")
        return False

def main():
    """Run all tests."""
    print("🌟 Quantum Reality Code System Test")
    print("=" * 50)
    
    tests = [
        ("Homepage", test_homepage),
        ("Generator", test_generator),
        ("Council", test_council),
        ("Other Pages", test_other_pages),
        ("API Endpoints", test_api_endpoints)
    ]
    
    results = []
    for test_name, test_func in tests:
        print(f"\n🧪 Running {test_name} tests...")
        result = test_func()
        results.append((test_name, result))
        sleep(1)  # Small delay between tests
    
    print("\n📊 Test Results Summary:")
    print("=" * 30)
    passed = 0
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\n🎯 Overall: {passed}/{len(results)} tests passed")
    
    if passed == len(results):
        print("🎉 All tests passed! System is ready.")
    else:
        print("⚠️  Some tests failed. Check the system.")
    
    return passed == len(results)

if __name__ == "__main__":
    main()