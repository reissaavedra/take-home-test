from email import message
from fastapi import FastAPI
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
import httpx

USER = 'reissaavedra'
REPO = 'take-home-test'
BASE_URL = 'https://api.github.com/'

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://17.172.0.1:3000",
]

origins = ["*"]

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]

app = FastAPI(middleware=middleware)

@app.get("/")
async def read_main():
    return {"msg": "Hello World"}

@app.get('/user_info')
async def get_user_info():
    with httpx.Client(base_url=BASE_URL) as client:
        result = client.get(f"/users/{USER}").json()
        info_user = {
            'login': result['login'],
            'avatar_url': result['avatar_url'],
            'html_url': result['html_url'],
            'name': result['name'],
            'location': result['location'],
            'bio': result['bio']
        }
        return info_user

@app.get('/repo_info')
async def get_repo_info():
    with httpx.Client(base_url=BASE_URL) as client:
        result = client.get(f"/repos/{USER}/{REPO}").json()
        info_repo = {
            'id': result['id'],
            'full_name': result['full_name'],
            'ssh_url': result['ssh_url'],
            'topics': result['topics'],
            'license': result['license'],
            'pushed_at': result['pushed_at'],
            'created_at': result['created_at']
        }
        return info_repo


@app.get('/commits')
async def get_commits():
    with httpx.Client(base_url=BASE_URL) as client:
        response=[]
        results = client.get(f"/repos/{USER}/{REPO}/commits").json()
        for raw in results:
            info_commit = {
                'node_id': raw['node_id'],
                'sha': raw['sha'],
                'commit': raw['commit'],
                'html_url': raw['html_url'],
                'author': raw['author'],
            }
            response.append(info_commit)
        return response