import data from "../../data/danhSachGhe.json";

const DEFAULT_STATE = {
    seat_data: data,
    seat_info: [],
};

export const seatReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_SEAT_STATUS": {
            //this will check if the 'dangChon' attribute of the selected seat
            //If it is False, which means it hasn't been selected and it also means we need to push the seat to the seat_info state as it is 'SELECTED' now
            //If it's False, which means the seat has been pushed into the seat_info state, so we need to remove it.
            if (!payload.dangChon) {
                const seat_info_clone = [...state.seat_info];
                seat_info_clone.push(payload);
                state.seat_info = seat_info_clone;
            } else {
                const idx = state.seat_info.findIndex(
                    (element) => element.soGhe === payload.soGhe
                );
                const seat_info_clone = [...state.seat_info];
                seat_info_clone.splice(idx, 1);
                state.seat_info = seat_info_clone;
            }

            // console.log(state.seat_info)

            const data = JSON.parse(JSON.stringify(state.seat_data));
            const hang_idx = data.findIndex(
                (element) => element.hang === payload.hang
            );
            for (var i = 0; i < data.length; i++) {
                if (i === hang_idx) {
                    for (var k = 0; k < data[i].danhSachGhe.length; k++) {
                        if (data[i].danhSachGhe[k].soGhe === payload.soGhe) {
                            // console.log(data[i].danhSachGhe[k].dangChon)
                            data[i].danhSachGhe[k].dangChon =
                                !data[i].danhSachGhe[k].dangChon;
                            // console.log(data[i].danhSachGhe[k].dangChon)
                        }
                    }
                }
            }

            state.seat_data = data;
            break;
        }

        case "BOOK_SEAT": {
            // const data = JSON.parse(JSON.stringify(state.seat_data))
            if ((state.seat_info.length) === 0) {
                alert("You haven't selected any seats")
                return
            }
            console.log(payload);
            const data = JSON.parse(JSON.stringify(state.seat_data));
            for (var a = 0; a < payload.length; a++) {
                const booked_seat = payload[a]
                const hang_idx = data.findIndex(
                    (element) => element.hang === booked_seat.hang
                );
                console.log(hang_idx)

                for (var b = 0; b < data.length; b++) {
                    if (b === hang_idx) {
                        for (var c = 0; c < data[b].danhSachGhe.length; c++) {
                            if (
                                data[b].danhSachGhe[c].soGhe ===
                                booked_seat.soGhe
                            ) {
                                // console.log(data[i].danhSachGhe[k].dangChon)
                                data[b].danhSachGhe[c].daDat = true;
                                data[b].danhSachGhe[c].dangChon = false;
                                console.log(data[b].danhSachGhe[c].soGhe)
                                console.log(data[b].danhSachGhe[c].daDat)
                            }
                        }
                    }
                }

            }
            if (state.seat_info.length > 1) {
                alert('Your seats have been booked')
            }
            else {
                alert('Your seat has been booked')
            }

            state.seat_data = data
            state.seat_info = []

            break;
        }
    }

    return { ...state };
};
