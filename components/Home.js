import React, {useState, useEffect} from "react";
import { gettAssetsByTemplate } from "../service/asset";
import {
  Container,
  Button,
  Title,
  ModernDesc,
} from "./TopStyles";
import ProtonSDK from '../service/transferToken';
import { blackList } from "./BlackList";

const Home = () => {
  const [holder, setHolder] = useState([]);
  const [assetIds, setAssets] = useState([]);

  const getTokenInfo = () => {

      const ls =  holderEntry.split(',');
      setHolder(ls);

  }
  var templateNum = "49681"
  var sender = "sender"
  var holderEntry = "thomashp"
  const getAssets = async () => {
    // Change 1965 <= Airdrop nft templateId
    // Change "testairdrop" <= airdrop account
    let data = await gettAssetsByTemplate(templateNum,sender);
    await setAssets(data);
  }

  async function save() {

 templateNum = document.getElementById("templateText").value;
  document.getElementById("templateNum").innerHTML = templateNum;
  sender = document.getElementById("senderText").value;
   document.getElementById("sender").innerHTML = sender;
   holderEntry = (document.getElementById("holderText").value);
   holderEntry = holderEntry.replace(/\s/g, '');

  getAssets();
  getTokenInfo();
  alert("Saved!")
}


  const onAirdrop = async () => {
    for(let i = 0; i < assetIds.length; i++){
      if(i == holder.length){
        return;
      }
      sender = document.getElementById("senderText").value;
      alert("Sending!")
      // Change NFT DROP <= MEMO
      // Change "testairdrop" <= airdrop account
      await ProtonSDK.dropnfts("atomicassets", holder[i], assetIds[i].asset_id, "NFT DROP", sender).then(async (res) => {
        if (res.error){
          throw Error(res.error)
        }
      });
      if(i == assetIds.length - 1){
        alert("SUCCESS!");
      }
    }
  }

  useEffect(() => {
    getTokenInfo();
    getAssets();
    return () => {
    }
  }, [])
  return (
    <Container>
      <Title>
        Airdrop
      </Title>
      <ModernDesc>
      Airdropping to Wallets: <br />
      {holder.map((acc) =>
        (<p>{acc}</p>)
      )}
      Template ID: <span id="templateNum"></span> <br />
      Sender: <span id="sender"></span> <br /><br />
      Receiving Wallets: <input name="holderText" type="text" maxlength="512" id="holderText" class="searchField"/> <br />
      Sending Wallet: <input name="senderText" type="text" maxlength="512" id="senderText" class="searchField"/> <br />
      Template: <input name="templateText" type="text" maxlength="512" id="templateText" class="searchField"/> <br />
     </ModernDesc>

      <Button onClick={save}>Save</Button> <br />
      <Button onClick={onAirdrop}>AirDrop NFT's New</Button>
    </Container>
  );
};

export default Home;
