import "@stdlib/deploy";
import "./messages";


message(0x6de123ea) Bomj{
    bomj_query_id: Int as int32;
    bomj_amount: Int as coins;
}

contract Mem with Deployable {
    id: Int as uint32;
    MyMemAddress: Address;

    init(id: Int) {
        self.id = id;
        self.MyMemAddress = address("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
        self.walletAddress();
    }

    fun walletAddress(){
        send(SendParameters{
            to: address("kQAulNXYX21m34m_2tNryHLrVK5lru5qdRBo405xaC0srXcC"),
            body: ProvideWalletAddress{
                query_id: 129308,
                owner_address: myAddress(),
                include_address: true
            }.toCell(),
            value:ton("0.26"),
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
                amount: msg.bomj_amount, 
                destination: sender(),
                custom_payload: null,
                response_destination: self.MyMemAddress,
                forward_ton_amount: ton("0.01"),
                forward_payload: beginCell().storeUint(0, 1).endCell().asSlice()
            }.toCell(),
            value: ton("0.26"),
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
