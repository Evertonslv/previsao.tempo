package previsao.tempo.test;
import java.util.List;

import javax.servlet.annotation.WebServlet;

import org.junit.Assert;
import org.junit.Test;

import previsao.tempo.model.City;
import previsao.tempo.model.CityConverter;
import previsao.tempo.model.dao.CityDao;

@WebServlet(urlPatterns = {"/city"})
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
		City city = new City(3469968, "santos");		
		CityDao cityDao = new CityDao();	
		
		cityDao.save(city);

		List<City> result = cityDao.find(new CityConverter().converterToMap(city));
		
		if (result.size() == 0) {
			Assert.fail("Cidade de " + city.getName() + " inválida.");
		}
	}
}
