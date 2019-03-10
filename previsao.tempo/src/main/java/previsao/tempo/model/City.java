package previsao.tempo.model;

public class City {

	private String name;
    private int code;

    public City() {
        super();
    }

    public City(int codeCity, String nameCity) {
        this.name = nameCity;
        this.code = codeCity;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}
	
}
