import Chart from "chart.js/auto";
import React, { useEffect } from "react";
import Card from "./Card";
import ProductTable from "./ProductTable";

export default function Dashboard() {
  useEffect(() => {
    // const labels = ['فروردین' , 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند'];
    // const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    // const data = {
    //     labels: labels,
    //     datasets: [
    //         {
    //             label: 'فروش ماه',
    //             data: datapoints,
    //             borderColor: "#0062ff",
    //             fill: true,
    //             cubicInterpolationMode: 'monotone',
    //             tension: 0.4
    //         }
    //     ]
    // };
    // const config = {
    //     type: 'line',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         plugins: {
    //             title: {
    //                 display: true,
    //                 text: 'نمودار فروش یک سال گذشته'
    //             },
    //         },
    //         interaction: {
    //             intersect: false,
    //         },
    //         scales: {
    //             x: {
    //                 display: true,
    //                 title: {
    //                     display: true,
    //                     // text: 'زمان'
    //                 }
    //             },
    //             y: {
    //                 display: true,
    //                 title: {
    //                     display: true,
    //                     text: ' میلیون تومان'
    //                 },
    //                 // suggestedMin: -10,
    //                 // suggestedMax: 200
    //             }
    //         }
    //     },
    // };
    // const ctx = document.getElementById('myChart').getContext('2d');
    // new Chart(ctx , config)
  }, []);
  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      <div className="row">
        <Card
          currentValue={7}
          desc="سبد های خرید مانده امروز"
          title="سبد خرید امروز"
          icon="fas fa-shopping-basket"
          lastWeekValue={13}
          lastMonthValue={25}
        />

        <Card
          currentValue={5}
          desc="  سفارشات مانده امروز"
          title="سفارشات معلق و فاقد پرداختی"
          icon="fas fa-dolly card_icon"
          lastWeekValue={9}
          lastMonthValue={102}
        />

          <Card
          currentValue={85}
          desc="  سفارشات امروز"
          title="سفارشات کامل و دارای پرداختی"
          icon="fas fa-luggage-cart card_icon"
          lastWeekValue={99}
          lastMonthValue={102}
        />

          <Card
          currentValue={100.000}
          desc="  درآمد امروز"
          title=" جمع مبالغ پرداختی (تومان)"
          icon="fas fa-money-check-alt card_icon"
          lastWeekValue={99.000}
          lastMonthValue={85.000}
        />


       
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>

          <ProductTable/>
        </div>
      </div>
    </div>
  );
}
