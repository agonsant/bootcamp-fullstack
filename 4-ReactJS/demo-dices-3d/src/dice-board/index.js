import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from 'react-dom';
import { Dialog } from "@material-ui/core";
import Dices3d, { DICE_TYPES } from "../libs/react-dice-3d";


function DiceBoard() {
    const [open, changeOpen] = useState(false);
    useEffect(() => {
        console.log('updating')
        if (open) {
            // setTimeout(() => {
            //     changeOpen(false);
            // }, 3000);
        }
    }, [open]);

    return ReactDOM.createPortal(
        <Dices3d
            dices={[
                {
                    type: DICE_TYPES.D12,
                    backColor: "black",
                    fontColor: "white",
                    value: Math.floor(Math.random() * (12 - 1 + 1) + 1)
                },
                {
                    type: DICE_TYPES.D12,
                    backColor: "black",
                    fontColor: "white",
                    value: Math.floor(Math.random() * (12 - 1 + 1) + 1)
                }
            ]}
            height='100vh'
        />,
        document.getElementById('dices-board')
    )
    // (
    //     <Fragment>
    //         <button onClick={() => changeOpen(true)}>Throw Dices</button>
    //         <Dialog open={open} fullWidth>
    //             {open && (

    //             )}
    //         </Dialog>
    //     </Fragment>
    // );

}

export default DiceBoard;
