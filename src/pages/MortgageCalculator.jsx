import { useState } from 'react';
export default function MortgageCalculator() {
     const [loan_amount, setLoan_amount] = useState(0);
     const [annual_rate, setAnnual_rate] = useState(0);
     const [percentage_rate, setPercentage_rate] = useState(0);
     const [loan_term, setLoan_term] = useState(0);
     const [monthly_payment, setMonthly_payment] = useState(null)
     const submithandler = (e) => {
          e.preventDefault();
          let i = percentage_rate / 12;
          let n = loan_term * 12;
          let m = loan_amount * (i * ((i + 1) ** n)) / ((i + 1) ** n - 1);
          setMonthly_payment(m);
     }
     return (
          <>
               <form onSubmit={submithandler}>
                    <label className='flexrow'>
                         Loan amount
                         <input value={loan_amount} onChange={(e) => setLoan_amount(e.target.value)} />
                    </label>
                    <br />
                    <label className='flexrow'>
                         Annual interest rate (%)
                         <input value={annual_rate} onChange={(e) => setAnnual_rate(e.target.value)} />
                    </label>
                    <br />
                    <label className='flexrow'>
                         percentage rate (APR)
                         <input value={percentage_rate} onChange={(e) => setPercentage_rate(e.target.value)} />
                    </label>
                    <br />
                    <label className='flexrow'>
                         Loan term (in years)
                         <input value={loan_term} onChange={(e) => setLoan_term(e.target.value)} />
                    </label>
                    <br />
                    <button>
                         Submit
                    </button>
               </form>
               {
                    monthly_payment && <h3>Monthly Payment :  {monthly_payment}</h3>
               }
          </>
     );
}
