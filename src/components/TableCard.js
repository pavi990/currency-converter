import { Table, Card } from "react-bootstrap";

const TableCard = ({ data }) => {
    return (
        <Card className='text-center p-3 my-5 mx-auto shadow'>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fx Rate</th>
                            <th>Custom Rate</th>
                            <th>Initial Amount</th>
                            <th>Converted Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{value.fxRate}</td>
                                <td>{value.customRate}</td>
                                <td>{value.initialAmount} {value.inputCurr}</td>
                                <td>{value.convertedAmount} {value.inputCurr === 'USD' ? 'EUR' : 'USD'}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default TableCard;