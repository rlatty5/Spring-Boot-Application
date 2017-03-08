/**
 * Created by romarionewmanlatty on 2/23/17.
 */
"use strict";
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        try {
            this.mongooseConnection = mongoose.connection;
        }
        catch (err) {
            console.log(err);
        }
        /*
         this.mongooseConnection.once("open", () => {
         console.log("Connected to mongodb.");
         });
    
         this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
         return this.mongooseInstance;
    
         */
    };
    return DataAccess;
}());
DataAccess.connect();
module.exports = DataAccess;
//# sourceMappingURL=DataAccess.js.map