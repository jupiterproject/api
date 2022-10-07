# 🚀 Jupiter API
Jupiter API is the API powering Jupiter 🚀. Built by Jupiter (with 💖) for Jupiter.

----

### 🤔 Wait, what is Jupiter?
Jupiter is an app allowing students to keep their schedule all in one place. Log in with your Google account, and view all of your upcoming assignments all in one place!

## 📦 Technologies
- FastAPI
  - A technology similar to Express (for js), Fiber (for Go), and Rocket (for Rust). Allows routing to serve JSON content to API. **Does not use GraphQL**.
- Python
  - FastAPI is a Python module.
- httpx (currently not a required module, as it is not used in the project yet)
  - A next-generation HTTP client for Python 3.
  
### It doesn't use GraphQL?
Yes, that's right. It doesn't use GraphQL, because that would be considered going overboard.


## 🖥️ Self-Hosting
The Jupiter API is able to be self-hosted. The assignment modules are powered by the **Google Classroom API**.
> **Note**: The API is not completed yet, meaning you should not try using it (obviously). This also means that the self-hosting guide is subject to change.

### Current Self-Hosting Guide
1. Clone and `cd` into the repository directory
2. Setup a virtual environment in the root directory using `virtualenv`
3. Make sure you install the required dependencies (for now, just FastAPI)
4. Run the `main.py` file in the root directory. This will open a webserver on http://localhost:8000. The server is running using uvicorn (core dependency of FastAPI), so the port is easily modifiable in the dunder main (`__main__`) statement at the bottom of the `main.py` file
   - The server can also be run in the console by using the command: `uvicorn main:app --reload`. The `--reload` flag allows for on-save reload
  
## ✔️ Todo
We have the following features planned for the Jupiter API. Checked off items are completed (but you knew that, hopefully).
- [x] Setup boilerplate project with FastAPI fetching sample data to test API endpoints
- [ ] Connect Google Classroom API
- [ ] Create API endpoints to access schedules (and other GC API information)
