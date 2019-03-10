package previsao.tempo.model;

import java.util.HashMap;
import java.util.Map;

import com.mongodb.DBObject;

public class CityConverter {

	public Map converterToMap(City city) {
        Map mapCity = new HashMap();
        mapCity.put("code", city.getCode());
        mapCity.put("name", city.getName());        

        return mapCity;
    }

    public City converterToCity(DBObject dbo) {
        City city = new City();
        city.setCode(Integer.parseInt(dbo.get("code").toString()));
        city.setName(dbo.get("name").toString());

        return city;
    }
	
}
