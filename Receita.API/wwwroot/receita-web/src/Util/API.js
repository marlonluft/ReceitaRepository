const API = {
    get: (url) => {
        return fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        ).then((res) => {
            return res.json();
        }).catch((exception) => {
            throw exception;
        })
    },

    post: (url, data) => {
        return fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json();
        }).catch((exception) => {
            throw exception;
        })
    },

    put: (url, data) => {
        return fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json();
        }).catch((exception) => {
            throw exception;
        })
    },

    remove: (url) => {
        return fetch(
            url,
            {
                method: 'REMOVE',
            }
        ).then((res) => {
            return res.json();
        }).catch((exception) => {
            throw exception;
        })
    }
}

export default API