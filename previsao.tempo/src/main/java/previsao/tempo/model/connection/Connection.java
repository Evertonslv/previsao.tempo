package previsao.tempo.model.connection;

import com.mongodb.DB;
import com.mongodb.Mongo;

@SuppressWarnings("deprecation")
public class Connection {

	private static final String HOST = "localhost";
	private static final int PORT = 27017;
	private static final String DB_NAME = "city";

	private static Connection uniqInstance;
	private Mongo mongo;
	private DB db;

	private Connection() {

	}

	//garante sempre uma unica instancia
	public static synchronized Connection getInstance() {
		if (uniqInstance == null) {
			uniqInstance = new Connection();
		}

		return uniqInstance;
	}

	//garante um unico objeto mongo
	public DB getDB() {
		if (mongo == null) {
			mongo = new Mongo(HOST, PORT);
			db = mongo.getDB(DB_NAME);
		}
		
		return db;
	}

}
