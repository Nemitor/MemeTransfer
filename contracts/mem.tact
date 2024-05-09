import "@stdlib/deploy";
import "./messages";

contract Mem with Deployable {
    id: Int as uint32;
    MyMemAddress: Address;

    init(id: Int) {
        self.id = id;
        self.MyMemAddress = address("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
        send(SendParameters{
        to: address("EQB5lcF67fJp1Z7i8SF7t_1cJ4kdxvgdZDruzdRCpHy3-mG8"),
        body: ProvideWalletAddress{
            query_id: 500,
            owner_address: myAddress(),
            include_address: true
        }.toCell(),
        value:ton("0.02"),
        mode: SendIgnoreErrors
    });
    }
    
    receive (msg: TakeWalletAddress){
        self.MyMemAddress = msg.wallet_address;
    }
    
    receive(msg: Bomj){
        send(SendParameters{
            to: self.MyMemAddress,
            body: Transfer{
                query_id: msg.bomj_query_id, 
                amount: ton("200"), 
                destination: sender(),
                custom_payload: null,
                response_destination: self.MyMemAddress,
                forward_ton_amount: ton("0.01"),//05 - 0472
                forward_payload: beginCell().storeUint(0, 1).endCell().asSlice()
            }.toCell(),
            value: ton("0.05"),//0.16
            mode: SendIgnoreErrors
        });
    }

    get fun id(): Int {
        return self.id;
    }

    get fun retAddres(): Address{
        return self.MyMemAddress;
    }
}
