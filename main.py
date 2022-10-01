from typing import Union
import uvicorn

from fastapi import FastAPI
from pydantic import BaseModel


import requests

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def upgrade_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

@app.get("/users")
async def get_all_users():
    data = requests.get("https://jsonplaceholder.typicode.com/users")
    return data.json()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

