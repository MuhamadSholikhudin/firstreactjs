import React from 'react';
import { Button, Card, CardTitle,  CardText } from 'reactstrap';


function DetailComp(props) {
    return ( <div>
                 <Card body>
                    <CardTitle tag="h5">
                            {props.location.state.judul}
                    </CardTitle>
                    <CardText>
                        {props.location.state.tanggal}
                    </CardText>
                    <Button>
                    Go somewhere
                    </Button>
                </Card>
        </div>
    )
}

export default DetailComp;
