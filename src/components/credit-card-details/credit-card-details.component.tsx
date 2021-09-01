import React, {useState} from 'react'
import {
    CardExpiryElement,
    CardCvcElement,
    Elements,
    useStripe,
    useElements,
    CardNumberElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ReactComponent as Check } from "../../assets/images/Vector.svg";

import validationSchema from './credit-card-detail.schema'
import { 
    MainContainer, 
    CreditCardDetailsString, 
    Input, 
    CardNumber, 
    Container, 
    PaymentButton, 
    SubscriptionInfoContainer,
    SubscriptionString,
    MonthlyString,
    CostString,
    Line,
    BenefitsString 
 } from './credit-card-details.styles'
 import styles from './credit-card-detail.module.scss';


interface IProps {
    message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }: IProps) => (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>{message}</p>
    </div>
);

const elementStyle= {
    base: {
        color: "#32325d",
        margin: '10px 0 20px 0',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '16px',
        "::placeholder": {
            color: '#000000',
            fontFamily: 'Manrope',
            fontStyle: 'normal',
            fontWeight: '800',
            fontSize: '16px',
        },
    },
};

const CreditCardDetail = () => {
    const stripePromise = loadStripe('pk_test_51IspTpA4jB8HmSwEKZLkQHVaJjFxkEikHcVqiYGRDRQnlpodQslKMe7fYtKjSsXYN1NZMex1co4XTfliznye4mt200xdSLjYC5');

    // const initialTouched = Object.keys(queryErrors?.validationErrors).reduce(
    //     (res, key) => ({ ...res, [key]: true }),
    //     {}
    // );

    // const [cardNumberError, setCardNumberError] = useState('');
    // const [cardCVVError, setCardCVVError] = useState('');
    // const [cardDateError, setCardDateError] = useState('');
  
    // const [cardNumberComplete, setCardNumberComplete] = useState(false);
    // const [cardCVVComplete, setCardCVVComplete] = useState(false);
    // const [cardDateComplete, setCardDateComplete] = useState(false);
    // const [canSubmit, setCanSubmit] = useState(false);

    // const { values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue } =
    // useFormik({
    //   initialValues:{
    //       name: '',
    //   },
    //   initialErrors,
    //   initialTouched,
    //   enableReinitialize: true,
    //   onSubmit: async (billingInfo: Partial<BillingAddress>) => {
    //     if (!stripe || !elements) {
    //       return;
    //     }

    //     const cardElement = elements.getElement(CardNumberElement);
    //     if (cardElement != null) {
    //       const { token, error } = await stripe.createToken(cardElement, billingInfo);
    //       if (error) console.log(error);
    //       if (token) dispatch(updateCreditCard(user, token));
    //     }
    //   },
    //   validationSchema,
    //   validate: (newValues) => {
    //     const newErrors: ErrorsFromValues<typeof newValues> = {};

    //     if (newValues.address_phone && newValues.address_phone.length < phoneMinLength) {
    //       newErrors.address_phone = 'Invalid phone number';
    //     }

    //     return newErrors;
    //   },
    // });

    return (
        <MainContainer>
            <div className={styles.flexDirectionRow}>
                <Elements stripe={stripePromise}>
                    <div className={styles.creditCardDetailContainer}>
                        <CreditCardDetailsString>Enter your credit card details</CreditCardDetailsString>
                        <CardNumber>
                            <div className={styles.smallOpacity}>
                                <CardNumberElement
                                    options={{
                                        style: elementStyle,
                                        placeholder: 'Card number'
                                    }}
                                />
                            </div>
                        </CardNumber>
                        <Input
                            type="text"
                            placeholder="Cardholder name"
                            variant="outlined"
                        />
                        <div className={styles.flexDirectionRow}>
                            <Container margin="20px">
                                <div className={styles.smallOpacity}>
                                    <CardExpiryElement
                                        options={{
                                            style: elementStyle,
                                            placeholder: 'Expiry date'
                                        }}
                                    />
                                </div>
                            </Container>
                            <Container>
                                <div className={styles.smallOpacity}>
                                    <CardCvcElement 
                                        options={{
                                            style: elementStyle,
                                            placeholder: 'CVV'
                                        }}
                                    />
                                </div>
                            </Container>
                        </div>
                        <PaymentButton>Pay now</PaymentButton>
                    </div>
                </Elements>
                <SubscriptionInfoContainer>
                    <SubscriptionString>Subscription</SubscriptionString>
                    <div>
                        <div className={styles.paragraph}>
                            <MonthlyString>Monthly</MonthlyString>
                            <CostString><strong>£12</strong><strong style={{opacity: 0.3}}> / mo</strong></CostString>
                        </div>
                        <Line/>
                        <div className={styles.paragraph}>
                            <Check className={styles.checkContainer}/>
                            <BenefitsString>Unlimited Bandwitch</BenefitsString>
                        </div>
                        <div className={styles.paragraph}>
                            <Check className={styles.checkContainer}/>
                            <BenefitsString>Encrypted Connection</BenefitsString>
                        </div>
                        <div className={styles.paragraph}>
                            <Check className={styles.checkContainer}/>
                            <BenefitsString>Yes Traffic Logs</BenefitsString>
                        </div>
                        <div className={styles.paragraph}>
                            <Check className={styles.checkContainer}/>
                            <BenefitsString>Works on All Devices</BenefitsString>
                        </div>
                        <div className={styles.paragraph}>
                            <Check className={styles.checkContainer}/>
                            <BenefitsString>Connect Anyware</BenefitsString>
                        </div>
                    </div>
                </SubscriptionInfoContainer>
            </div>
        </MainContainer>
    )
}

export default CreditCardDetail
