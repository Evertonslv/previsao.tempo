package previsao.tempo.model.dao;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.mongodb.DBObject;

import previsao.tempo.model.City;
import previsao.tempo.model.CityConverter;


public class CityDao extends EntityDao {

	public CityDao() {
		super(City.class);
	}

	public void save(City city) {
        Map<?, ?> mapCity = new CityConverter().converterToMap(city);
        
        if(isExistCity(city.getName()))
        	save(mapCity);
    }
	
	private boolean isExistCity(String name) {
		URL url;
        HttpURLConnection connection = null;
        
		try {
			url = new URL("http://api.openweathermap.org/data/2.5/weather?q="+ name +"&units=metric&appid=eb8b1a9405e659b2ffc78f0a520b1a46");
			connection = (HttpURLConnection) url.openConnection(); 
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		boolean ret = false;
				
		try {
			ret = connection.getResponseCode() == 200;
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return ret;
				
	}

	public List<City> find() {
        List<DBObject> dbObject = findAll();

        List<City> citys = new ArrayList<City>();

        for (DBObject dbo : dbObject) {
        	City city = new CityConverter().converterToCity(dbo);
        	citys.add(city);
        }

        return citys;
    }
	
	public List<City> find(Map<?, ?> mapKeyValue) {
        List<DBObject> dbObject = findKeyValue(mapKeyValue);

        List<City> citys = new ArrayList<City>();

        for (DBObject dbo : dbObject) {
            City city = new CityConverter().converterToCity(dbo);

            citys.add(city);
        }

        return citys;
    }
	
}
