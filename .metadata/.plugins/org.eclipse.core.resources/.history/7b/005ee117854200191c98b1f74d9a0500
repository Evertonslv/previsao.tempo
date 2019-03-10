package previsao.tempo.service;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import previsao.tempo.model.City;
import previsao.tempo.model.dao.CityDao;

public class CityService extends HttpServlet {

	private static final long serialVersionUID = 201402030750L;
	private static final Logger LOGGER = Logger.getLogger(CityService.class.toString());
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String nameCity = request.getParameter("namecity");
		int codeCity = Integer.parseInt(request.getParameter("codecity"));
				
		City city = new City(codeCity, nameCity);
		new CityDao().save(city);
		
		LOGGER.info("Inseriu uma nova cidade. " + city);
				
		String cityJson = new Gson().toJson(city);
		
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
		response.getWriter().write(cityJson);
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		LOGGER.info("Pesquisa de cidades.");

		List<City> listCity = new CityDao().find();
		
		String cityJson = new Gson().toJson(listCity);
		
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
		response.getWriter().write(cityJson);
	}

}
