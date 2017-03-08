/**
 * Created by romarionewmanlatty on 2/23/17.
 */
export class Constants {
  static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ?
    process.env.dbURI : "mongodb://localhost:27017/StudentEntries"
}
Object.seal(Constants);
