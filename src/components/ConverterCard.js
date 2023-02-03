import { useState, useEffect } from "react";
import generateRate from "../generateRate";
import differenceIsGreaterThanTwoPercent from "../differenceIsGreaterThanTwoPercent";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

const ConverterCard = ({ addData }) => {
    const [fxRate, setFxRate] = useState(1.1);
    const [inputCurr, setInputCurr] = useState('EUR');
    const [customInput, setCustomInput] = useState(false);
    const [customRate, setCustomRate] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);

    useEffect(() => {
        setInterval(changeRate, 3000)
    }, [])

    const changeRate = () => {
        setFxRate(generateRate().toFixed(3))
    }

    const handleCurrencyChange = (value) => {
        value === 'USD' ? setInputCurr('EUR') : setInputCurr('USD')
        setInputValue(convertedValue)
    }

    const converter = () => {
        let rate = customInput ? differenceIsGreaterThanTwoPercent(fxRate, customRate) ? fxRate : customRate : fxRate

        if (inputCurr === 'USD') {
            setConvertedValue((inputValue / rate).toFixed(3))
        }
        else {
            setConvertedValue((inputValue * rate).toFixed(3))
        }

    }

    useEffect(() => {
        converter()
    }, [fxRate, inputValue])

    return (
        <Card className='text-center p-3 my-5 mx-auto shadow'>
            <Card.Body>
                <Form>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Fx Rate
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control readOnly disabled={customInput} type='text' value={fxRate} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Custom Rate
                        </Form.Label>
                        <Col className="text-start d-flex flex-column justify-content-center" sm="10">
                            <div>
                                <Form.Check
                                    className="d-inline mx-2"
                                    type="switch"
                                    id="custom-switch"
                                    value={customInput}
                                    onChange={(e) => setCustomInput(!customInput)}
                                />
                            </div>
                        </Col>
                    </Form.Group>

                    {customInput && <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Custom Rate
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" value={customRate} onChange={(e) => setCustomRate(e.target.value)} />
                        </Col>
                    </Form.Group>
                    }

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Currency
                        </Form.Label>
                        <Col className="text-start d-flex flex-column justify-content-center" sm="10">
                            <div> 
                                EUR
                                <Form.Check
                                    className="d-inline mx-2"
                                    type="switch"
                                    id="custom-switch"
                                    value={inputCurr}
                                    onChange={(e) => handleCurrencyChange(e.target.value)}
                                />
                                USD
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            {inputCurr}
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            {inputCurr === 'USD' ? 'EUR' : 'USD'}
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" disabled value={convertedValue} />
                        </Col>
                    </Form.Group>

                    <Button className="mx-2" variant="primary" onClick={() => addData({
                        'fxRate': fxRate,
                        'customRate': customRate,
                        'inputCurr': inputCurr,
                        'initialAmount': inputValue,
                        'convertedAmount': convertedValue,
                    })}>
                        Save
                    </Button>

                </Form>
            </Card.Body>
        </Card>
    )
}

export default ConverterCard;