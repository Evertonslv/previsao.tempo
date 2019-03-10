package previsao.tempo.model.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import previsao.tempo.model.connection.Connection;


public class EntityDao implements IDao {
	
	private DBCollection dbCollection;

    public EntityDao(Class<?> persistentClass) {
        this.dbCollection =
                Connection.getInstance()
                    .getDB().getCollection(persistentClass.getSimpleName());
    }
    
    protected DBCollection getDbCollection() {
        return dbCollection;
    }

    public void save(Map<?, ?> mapEntity) {
        BasicDBObject document = new BasicDBObject(mapEntity);
        dbCollection.save(document);
    }

    public List<DBObject> findAll() {
        List<DBObject> list = new ArrayList<DBObject>();

        DBCursor cursor = dbCollection.find();

        while (cursor.hasNext()) {
            list.add(cursor.next());
        }

        return list;
    }
    
    public List<DBObject> findKeyValue(Map<?,?> keyValue) {
        List<DBObject> list = new ArrayList<DBObject>();

        DBCursor cursor = dbCollection.find(new BasicDBObject(keyValue));

        while (cursor.hasNext()) {
            list.add(cursor.next());
        }

        return list;
    }

}
