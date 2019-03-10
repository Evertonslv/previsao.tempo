package previsao.tempo.test;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import previsao.tempo.model.City;
import previsao.tempo.model.CityConverter;
import previsao.tempo.model.dao.CityDao;

public class CityServiceTeste {

	@Test
	public void testGetAllCity() {
		CityDao cityDao = new CityDao();
		List<City> result = cityDao.find();

		if (result.size() == 0) {
			Assert.fail("Nenhuma cidade cadastrada.");
		}
	}
	
	@Test
	public void testGetCity() {
		City city = new City(3469968, "jhkhkjh");		
		CityDao cityDao = new CityDao();
		
		List<City> result = cityDao.find(new CityConverter().converterToMap(city));

		if (result.size() == 0) {
			Assert.fail("Cidade " + city.getName() + " não cadastrada.");
		}
	}
		
	@Test
	public void testeSaveCity() {
		City city = new City(3469968, "Blumenau");		
		CityDao cityDao = new CityDao();	
		
		cityDao.save(city);

		List<City> result = cityDao.find(new CityConverter().converterToMap(city));
		
		if (result.size() == 0) {
			Assert.fail("Cidade de " + city.getName() + " inválida.");
		}
	}
}
