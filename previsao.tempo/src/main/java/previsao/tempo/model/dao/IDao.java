package previsao.tempo.model.dao;

import java.util.List;
import java.util.Map;

public interface IDao {
	
	void save(Map<?, ?> mapEntity);
    List<?> findAll();
    List<?> findKeyValue(Map<?, ?> keyValue);

}
