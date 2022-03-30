var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"./pages/about/"},{"title":"2022 協同產品設計","text":"2022 協同產品設計課程 關於協同 這一篇是我關於協同部分所寫的文章(僅供個人思想 問題: 首先進行第一種猜想(能否讓所有組員同時進行倉儲修改? 目前的答案為否 1.進行改版在上傳時是需要個人的KEY的，如果依字面上若想做倒他人也能上傳勢必要有倉儲組長個人的key，但是測試過key是沒有辦法多個帳號共用 2.PPK同理一個PPK只能登記在一個帳號無法共用所以目前無法同時更新 第二種猜想(假設可以同時更新那解決版本衝突得如何運行 1.第一種情況如果一個文本在序列第40行後增加字串，那如果第二人在之後也以先前未改版版本進行並也在第40行之後進行更改兩邊發生衝突該如何解決? 我的想法是因該可以寫一段程式幫每則增加的訊息在添加之前把他們上一句進行標記，當今天標記衝突時程式可以跳出訊息並將此段訊息銜接在另一段上，也就是在推送之前先把別人的資料pull下來發現標記有更動則自動變更到新訊息的最後一行在推送 2.第二種強況如在修改的檔案被人刪除時應該怎麼辦，簡單來說每則訊息甚至檔案都是有所謂的贆投如果今天在修改時標頭不見時會讓檔案無法分類進而導致錯亂，關於標題頭問題我之前有遇到類似的，USB裡的檔案貌似在退出時手續不對導致標題頭遺失，電腦沒有辦法綁資料分類導致所有相關檔案全部變成亂碼並且無法判斷數量及大小，目前個人猜想如果在編輯檔案時直接被其他人刪除時，在推送時應該會出現類似的問題，要修改的檔案被刪除電腦無法判斷訊息是被歸類在哪裡進而出現錯誤 我的想法目前也只能將此段訊息用一個程式幫忙賦予新的檔案讓他在出現類似錯誤時先直接開新的檔案紀錄下來，後面再進行除錯 第三種猜想(關於程式協同及機械類的協同 課堂上老師說過程式協同其實相比於機械的協同是可以比較即時的，因為機械相關在協同是必須去與真實情況變動，並且機械及真實受限於很多的規則束腹很難做到非常及時的協同，畢竟很多零件並不像程式一樣隨叫隨到 關於git指令失效 事情緣由是由2022/03/22晚上在製作影片時發生目前還未知的問題進而導致git指令失效，目前推測原因還是未知，首先推送檔案並未超過(單個檔案>50MB，再者前面也有推送但是沒有問題，所以目前無法判斷有何種問題 解決方法: 將整個近端資料夾刪除後再從github上重新複製下來就沒有問題，關於git並未更改其他東西只是在其他電腦時就自行解決了，有可能是git在運行時path錯亂沒有讀到相關git的執行檔所以才導致至些問題的 W3 NX教學影片製作 第1部: 影片網址1 第9部: 影片網址9 第14部: 影片網址14 第19部: 影片網址19 第31部: 影片網址31 新增倉儲步驟 原本cmsimde的內容主分支是master所以一開始他會因為遠端是main而無法推送，所以在近端新增main分支並將master merge到main裡，先用git remote add origin建立連結，然後在main的情況下把遠端的 README.md給pull下來 簡單來說就是cmsimde本身是屬於master而遠端是main所以主要的大問題是處理分支衝突 下方有影片可以點進去看裡面有詳細步驟還有字幕","tags":"Misc","url":"./w6_40923123.html"}]};