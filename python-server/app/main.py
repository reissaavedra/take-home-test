from email import message
from traceback import print_tb
from fastapi import FastAPI
from time import time
import httpx
from typing import Optional, Set
from pydantic import BaseModel
import json

app = FastAPI()

USER = 'reissaavedra'
REPO = 'take-home-test'
BASE_URL = 'https://api.github.com/'

headers = {'user-agent': 'python-server/0.0.1'}
params = {}

@app.get('/user_info')
async def get_user_info():
    with httpx.Client(base_url=BASE_URL) as client:
        result = client.get(f"/users/{USER}")
        info_user = {
                'login': result['login'],
                'avatar_url': result['avatar_url'],
                'html_url': result['html_url'],
                'url': result['url'],
                'name': result['name'],
                'location': result['location'],
                'bio': result['bio'],
                'followers': result['followers']
        }
        return info_user

@app.get('/repo_info')
async def get_repo_info():
    with httpx.Client(base_url=BASE_URL) as client:
        result = client.get(f"/repos/{USER}/{REPO}")
        info_repo = {
            'id': result['id'],
            'name': result['name'],
            'full_name': result['full_name'],
            'ssh_url': result['ssh_url'],
            'name': result['name'],
            'topics': result['topics'],
            'pushed_at': result['pushed_at'],
            'license': result['license']['name'],
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
                'sha': raw['sha'],
                'commit': raw['commit'],
                'html_url': raw['html_url'],
                'author': raw['author'],
            }
            response.append(info_commit)
        return response

# @app.get('/commit')
# async def get_commits():
#     with httpx.Client(base_url=BASE_URL) as client:
#         response=[]
#         results = client.get(f"/repos/{USER}/{REPO}/commits").json()
#         for raw in results:
#             info_commit = {
#                 'sha': raw['sha'],
#                 'commit': raw['commit'],
#                 'html_url': raw['html_url'],
#                 'author': raw['author'],
#             }
#             response.append(info_commit)
#         return response