import "@stdlib/deploy";
import "./messages";

message SetAddress{
    newAddres: Address;
}
message Bomj{
    int: Int as int32;
}

contract Mem with Deployable {
    id: Int as uint32;
    memWalletAddress: Address;
    addressTaken: Bool = false;

    init(id: Int) {
        self.id = id;
        self.memWalletAddress = address("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
    }

    receive(msg: SetAddress){
        self.memWalletAddress = msg.newAddres;
        self.addressTaken = true;
    }

    receive(msg: ProvideWalletAddress){
        self.memWalletAddress = msg.owner_address;
        self.addressTaken = true;
    }

    receive(msg: Bomj){
        send(SendParameters{
            to: self.memWalletAddress,
            body: Transfer{
                query_id:1, 
                amount: 2, 
                destination: sender(),
                custom_payload: null,
                response_destination: self.memWalletAddress,
                forward_ton_amount: ton("0.01"),
                forward_payload: emptySlice()
            }.toCell(),
            value: ton("0.02"),
            mode: SendIgnoreErrors
        });
    }

    get fun id(): Int {
        return self.id;
    }

    get fun memWalletAddress(): Address{
        return self.memWalletAddress;
    }
    get fun addressTaken(): Bool{
        return self.addressTaken;
    }
}
