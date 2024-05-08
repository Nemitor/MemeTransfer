import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(Mem.fromAddress(Address.parse("kQB5e1qltghaLqWhDhCnmUCUq5jJtm9SMU81Uc7FbRhff45L")));

    await mem.send(
        provider.sender(),
        {
            value: toNano('0.25'),
        },
        {
            $$type: "Update",
            update_query_id: 1233n
        }
    );
    await provider.waitForDeploy(mem.address);
}
