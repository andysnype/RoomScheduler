package rcos;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.json.simple.JSONValue;
public class RCOS {

    public static void main(String[] args) throws Exception {
    	 
	JSONParser parser = new JSONParser();

	try {

		Object obj = JSONValue.parse(new FileReader("C:\\Users\\Andy-K\\Documents\\GitHub\\RoomScheduler\\data\\class_times\\sections.json"));
		HashMap<String, ArrayList<Time>> myMap = new HashMap<String, ArrayList<Time>>();
		
		JSONObject jsonObject = (JSONObject) obj;
		JSONArray sections = (JSONArray)(jsonObject.get("result"));
		//System.out.println(sections);
		
		for(int i = 0; i < sections.size(); ++i)
		{
			JSONObject section = (JSONObject)(sections.get(i));
			JSONArray times = (JSONArray)(section.get("section_times"));
			for(int j = 0; j < times.size(); ++j)
			{
				JSONObject time_slot = (JSONObject)(times.get(j));
				if(time_slot.get("location").equals(""))
					continue;
				
				String time_start =(String) time_slot.get("start");
				String time_end = (String) time_slot.get("end");
				String room = (String) time_slot.get("location");
				String prof = (String) time_slot.get("instructor");
				JSONArray days = (JSONArray)(time_slot.get("days_of_the_week"));
				ArrayList<Time> used = new ArrayList<Time>();
				for(int k = 0; k < days.size(); ++k)
				{
					String day = (String) days.get(k);
					used.add(new Time(day, time_start, time_end, prof));
					//System.out.println(room + "\t" + day + "\t" + time_start +"\t" + time_end);
				}
				if(myMap.containsKey(room))
				{
					ArrayList<Time> exists = myMap.get(room);
					for(int k = 0; k < used.size(); ++k)
						exists.add(used.get(k));
					myMap.put(room, exists);
				}
				else
				{
					myMap.put(room, used);
				}
				
			}
//			System.out.println(times);
		}
		PrintWriter writer = new PrintWriter("data.txt", "UTF-8");
		JSONObject output = new JSONObject(myMap);
		FileWriter file = new FileWriter("yacs.json");
		file.write(output.toJSONString());
		Iterator it = myMap.entrySet().iterator();
		while(it.hasNext()){
			Map.Entry pairs = (Map.Entry) it.next();
			writer.print(pairs.getKey() + ": ");
			ArrayList<Time> tim = (ArrayList<Time>) pairs.getValue();
			for(int i = 0; i < tim.size(); ++i)
			{
				writer.print(tim.get(i) + "\t");
			}
			writer.println();
			it.remove();
		}
		
		//System.out.println(myMap);
		//JSONArray init_array = (JSONArray) obj.get(1);
		//JSONArray sections = (JSONArray) init_array.get(1);
		//System.out.println("works");
		
/*		String name = (String) jsonObject.get("name");
		System.out.println(name);

		long age = (Long) jsonObject.get("age");
		System.out.println(age);

		// loop array
		JSONArray msg = (JSONArray) jsonObject.get("messages");
		Iterator<String> iterator = msg.iterator();
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
		}*/

	} catch (FileNotFoundException e) {
		e.printStackTrace();
	}
    }

	
	/*public static void main(String[] args) throws Exception {


	JSONObject obj = new JSONObject("C:\\Users\\Andy-K\\Documents\\GitHub\\RoomScheduler\\data\\class_times\\sections.json");
	
	HashMap<String, ArrayList<Time>> myMap = new HashMap<String, ArrayList<Time>>();
	JSONArray array = obj.getJSONArray("result");
	for (int i = 0; i < array.length(); i++){
		JSONArray section_times = obj.getJSONArray("section_times");
		//String location = obj.getJSONArray("location");
		if (section_times.getString(3).length() > 0){
			if (myMap.containsKey(section_times.getString(3))) {
			 	JSONArray days = obj.getJSONArray("days_of_the_week");
			 	for (int j = 0; j < days.length(); j++){
			 		Time temp_time = new Time();
			 		temp_time.day = days.getString(j);
					temp_time.start = section_times.getString(0);
					temp_time.end = section_times.getString(2);
			 		(myMap.get(section_times.getString(3))).add(temp_time);
			 	}
			}
			else {
				myMap.put(section_times.getString(3), null );
				JSONArray days = obj.getJSONArray("days_of_the_week");
				for (int j = 0; j < days.length(); j++){
			 		Time temp_time = new Time();
			 		temp_time.day = days.getString(j);
					temp_time.start = section_times.getString(0);
					temp_time.end = section_times.getString(2);
					myMap.get(section_times.getString(3)).add(temp_time);
				}
			}
		}
	}
	}*/

}


