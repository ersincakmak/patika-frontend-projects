/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 1em;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: min(37.5rem, 100%); // 600px
    margin-inline: auto;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }

  li {
    list-style: disc;
    list-style-position: inside;
  }

  li,
  p,
  a {
    font-size: 1.25rem;
  }

  h1,
  h2,
  li,
  p {
    color: ${(props) => props.theme.colors.text};
  }
  a {
    color: ${(props) => props.theme.colors.brand};
    font-weight: 600;
    text-decoration: underline;
  }
`

const WhatIsBmi = () => {
  return (
    <Page>
      <div className="container">
        <section>
          <h1>What is the body mass index (BMI)?</h1>
          <p>
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy.
          </p>
          <p>
            The BMI calculation divides an adult's weight in kilograms by their
            height in metres squared. For example, A BMI of 25 means 25kg/m2.
          </p>
        </section>
        <section>
          <h2>BMI ranges</h2>
          <p>For most adults, an ideal BMI is in the 18.5 to 24.9 range.</p>
          <p>
            For children and young people aged 2 to 18, the BMI calculation
            takes into account age and gender as well as height and weight.
          </p>
          <p>If your BMI is:</p>
          <ul>
            <li>below 18.5 – you're in the underweight range</li>
            <li>between 18.5 and 24.9 – you're in the healthy weight range</li>
            <li>between 25 and 29.9 – you're in the overweight range</li>
            <li>between 30 and 39.9 – you're in the obese range</li>
          </ul>
          <p>
            If you want to calculate your BMI, try our{' '}
            <Link to="/">
              <a>Calculator</a>
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>Accuracy of BMI</h2>
          <p>
            BMI takes into account natural variations in body shape, giving a
            healthy weight range for a particular height.
          </p>
          <p>
            As well as measuring your BMI, healthcare professionals may take
            other factors into account when assessing if you're a healthy
            weight.
          </p>
          <p>
            Muscle is much denser than fat, so very muscular people, such as
            heavyweight boxers, weight trainers and athletes, may be a healthy
            weight even though their BMI is classed as obese.
          </p>
          <p>
            Your ethnic group can also affect your risk of some health
            conditions. For example, adults of South Asian origin may have a
            higher risk of some health problems, such as diabetes, with a BMI of
            23, which is usually considered healthy.
          </p>
          <p>
            You should not use BMI as a measure if you're pregnant. Get advice
            from your midwife or GP if you're concerned about your weight.
          </p>
        </section>
      </div>
    </Page>
  )
}

export default WhatIsBmi
