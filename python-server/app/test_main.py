from fastapi.testclient import TestClient

from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World"}

def test_get_user_info():
    response = client.get(f"/user_info")
    assert response.status_code == 200
    assert [*response.json().keys()] == ['login','avatar_url','html_url','name','location','bio']

def test_get_repo_info():
    response = client.get("/repo_info")
    assert response.status_code == 200
    assert [*response.json().keys()] == ['id','full_name','ssh_url','topics','license','pushed_at', 'created_at']

def test_get_commits():
    response = client.get("/commits")
    json_response = response.json()
    assert response.status_code == 200
    assert type(json_response) == list
    assert [*json_response[0].keys()] == ['node_id','sha','commit','html_url','author']