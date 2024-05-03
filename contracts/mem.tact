import "@stdlib/deploy";
import "./messages";


message(0x6de123ea) Bomj{
    MyMemAddress: Address;
    bomj_query_id: Int as int32;
    bomj_amount: Int as coins;
}

contract Mem with Deployable {
    id: Int as uint32;

    init(id: Int) {
        self.id = id;
    }

    receive(msg: Bomj){
        send(SendParameters{
            to: msg.MyMemAddress,
            body: Transfer{
                query_id: msg.bomj_query_id, 
                amount: msg.bomj_amount, 
                destination: sender(),
                custom_payload: null,
                response_destination: msg.MyMemAddress,
                forward_ton_amount: ton("0.4"),
                forward_payload: beginCell().storeUint(0, 1).endCell().asSlice()
            }.toCell(),
            value: ton("0.5"),
            mode: SendIgnoreErrors
        });
    }

    get fun id(): Int {
        return self.id;
    }
}
