package rcos;

class Time {
	
	public Time( String n_day,  String n_start,  String n_end, String n_prof)
	{
		day = n_day;
		start = n_start;
		end = n_end;
		professor = n_prof;
	}
	public String day;
	public String start;
	public String end;
	public String professor;
	
	public String toString()
	{
		String result ="\"day\":\"" + day + "\",\"time_begin\":\"" + start + "\",\"time_end\":\"" + end + "\",\"professor\":\"" + professor + "\"";
		return result;
	}
}