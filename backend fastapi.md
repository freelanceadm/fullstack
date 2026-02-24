#backend/fastapi

# create python vitual env

```bash
# update repo list and pkg list
sudo apt update

# install python virtualenv package
sudo apt install python3-venv

# now go to your project dir and create virtual env for python
cd ./back

# this ll create dir myenv which contains python packges for
# virtual environment
python3 -m venv myenv

# now you have to activate your envoronment
source myenv/bin/activate

# this ll run only once to upgrade pip command
pip install --upgrade pip

# next install fastapi
pip install "fastapi[standard]"
```

# minimal main.py example

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "FastAPI"}

```
- run FastAPI
```bash
# ensure that virtualenv is activated
fastapi dev main.py
```

