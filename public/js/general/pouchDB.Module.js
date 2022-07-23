/**
 * Store Data Locally in Database.
 */
export var pouchDB = {
    dbName: '',
    db: '',
    /**
     * Initialize pouchDb with it's database.
     * @param {*} dbName 
     */
    init: function (dbName) {
        this.dbName = dbName;
        this.db = new PouchDB(dbName);
    },
    /**
     * Post Data to Database
     * @param {*} data 
     */
    post: function (data) {
        data['_id'] = Date.now().toString();
        if (this.db) {
            return this.db.post(data);
        }
    },
    /**
     * filterCriteria's sample object 
     * {
     *      startkey: the _id of the first doc we'd like to fetch
     *      endkey: the _id of the last doc we'd like to fetch
     *      limit: maximum number of docs to return
     *      skip: number of docs to skip
     *      decending: true if we want reverse ordering
     * }
     * @param {*} filterCriteria 
     */
    fetch: function (filterCriteria) {
        if (this.db) {
            return new Promise((resolve, reject) => {
                this.db.allDocs(filterCriteria, function (err, response) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(response);
                    }
                })
            })
        }
        else {
            return null;
        }
    },
    /**
     * Destroy the database.
     */
    destroy: function () {
        if (this.db) {
            return new Promise((resolve, reject) => {
                this.db.destroy().then((data) => {
                    resolve('success');
                }).catch((err) => {
                    reject('error');
                })
            });
        }
    }
}