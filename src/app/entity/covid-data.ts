export interface CovidData {
  data:
    {
      local_new_cases: number;
      local_new_deaths: number;
      update_date_time: string;
      local_active_cases: number;
      local_deaths: number;
      local_total_cases: number;
      local_recovered: number;
      total_pcr_testing_count: number;
      local_total_number_of_individuals_in_hospitals: number;
    };
}
