var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': '期末考週', 'text': '', 'tags': '', 'url': '期末考週.html'}, {'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}, {'title': '機械手臂OOXX', 'text': "我們採取教導模式，我們是將有關按鍵對應位置把所有的相對位置需要轉的角度先給求出來 \n 把三個主動的軸角度都設定好之後再把他跟按鍵綁住這樣，但是因為模擬可能在軸的扭力跟移動速度的關係導致他的狀況可能會有差別，加上有時候像是比較遠的三格因為移動角度浮動太大所以模擬時會直接穿模而導致模擬上的問題。 \n 然後在關於兩隻機械手臂上的按鍵設定不要重複，不然另一個會無法正常運作 \n 程式部份我們討論出來後是由51號同學寫出來的 \n 影片網址:  https://youtu.be/zeUtvL02mzY \n 以下是有更改的部分 \n  if (auxiliaryData[1]==string.byte('x')) then   rotation1 = rotation1 - 10*deg  rotation2 = rotation2 - 27*deg  rotation3 = rotation3 - 29*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if x  if (auxiliaryData[1]==string.byte('r')) then   sim.setJointTargetPosition(axis1, 0)  sim.setJointTargetPosition(axis2, 0)  sim.setJointTargetPosition(axis3, 0)  rotation1 = 0  rotation2 = 0  rotation3 = 0  end -- if r  if (auxiliaryData[1]==string.byte('3')) then   rotation1 = rotation1 - 35*deg  rotation2 = rotation2 + 10*deg  rotation3 = rotation3 - 2*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 3  if (auxiliaryData[1]==string.byte('2')) then   rotation1 = 0  rotation2 = rotation2 + 10*deg  rotation3 = rotation3 + 10*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 2  if (auxiliaryData[1]==string.byte('1')) then   rotation1 = rotation1 + 35*deg  rotation2 = rotation2 + 10*deg  rotation3 = rotation3 - 2*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 1  if (auxiliaryData[1]==string.byte('4')) then   rotation1 = rotation1 + 20*deg  rotation2 = rotation2 - 20*deg  rotation3 = rotation3 - 60*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 4  if (auxiliaryData[1]==string.byte('5')) then   rotation1 = 0  rotation2 = rotation2 - 20*deg  rotation3 = rotation3 - 50*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 5  if (auxiliaryData[1]==string.byte('6')) then   rotation1 = rotation1 - 20*deg  rotation2 = rotation2 - 20*deg  rotation3 = rotation3 - 60*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 6  if (auxiliaryData[1]==string.byte('7')) then   rotation1 = rotation1 + 15*deg  rotation2 = rotation2 - 50*deg  rotation3 = rotation3 - 240*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 7  if (auxiliaryData[1]==string.byte('8')) then   rotation1 = 0  rotation2 = rotation2 - 50*deg  rotation3 = rotation3 - 240*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 8  if (auxiliaryData[1]==string.byte('9')) then   rotation1 = rotation1 - 15*deg  rotation2 = rotation2 - 50*deg  rotation3 = rotation3 - 240*deg  sim.setJointTargetPosition(axis1, rotation1)  sim.setJointTargetPosition(axis2, rotation2)  sim.setJointTargetPosition(axis3, rotation3)  end -- if 9 \n", 'tags': '', 'url': '機械手臂OOXX.html'}, {'title': 'W16', 'text': '\n 上圖為第一個三軸個轉五次 \n \n 上圖為吸盤吸到後的座標顯示 \n test \n 第1題 \n 首先第一個利用程式直接退coppeliasim裡的三軸進行作動 \n 首先打開coppeliasim打開uarm_nx_tkinter_gui_control.ttt檔，再來將uarm_tkinter_control.py打開執行他，之後先把coppeliasim裡的程式先執行，外部在執行，最後再把to cannect按下去連接起來，就可以用外部去控制了。 \n \n 還有注意這行要改成自家目前的網路環境或者不動才可模擬，至於網路IP位置查詢請使用ipconfig/all查詢 \n \n 第2題跟第3題 \n 簡單來說就是把coppeliasim的零件利用camera照出來然後再用python去將camera的影像抓出來用新的程式跑出來或者是網路上的頁面來顯示，只要兩個聯合應該就可以實行遠端操控跟遠端觀察了。 \n 但是在使用之前，由於程式裡有需下載keyboard的模組才可運行，所以可以先pip list去看自己已有的模組 \n \n 然後如果沒有再用 pip install keyboard來安裝模組 \n \n 安裝好在將coppeliasim的IP位置跟開啟路徑設定好，就可運行了。 \n \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W15', 'text': '這一周主要是針對uarm在nx裡組立後再用coppliasim進行程式模擬 \n 主要就是其中關於軸的設定像是前半段這三行 \n axis1=sim.getObject(\'/motor1\')\xa0 \xa0\xa0 axis2=sim.getObject(\'/motor2\') axis3=sim.getObject(\'/motor6\') \n 這幾行主要應該是在uarm裡軸的設定，以及中間有一部分則是控制軸控制的角度及移動方式等 \n 針對設定的三個軸進行參數設定 \n 並且鍵盤上每個按鍵其實都各代表者其中一種代碼，下面在控制軸的控制時你可以指定哪個代碼 \n 去驅動哪一軸進行作動 \n if (auxiliaryData[1]== string.byte("h")) then --r right turn in degree -- if key r pressed axis1 angle adds 2 degrees rotation2 = rotation2 + 1*deg --sim.setJointPosition(axis2, rotation2) sim.setJointTargetPosition(axis2, rotation2) end -- if k if (auxiliaryData[1]==string.byte("j")) then -- if key j pressed axis2 angle substract 2 degrees rotation2 = rotation2 - 1*deg --sim.setJointPosition(axis2, rotation2) sim.setJointTargetPosition(axis2, rotation2) end -- if j -- for joint2 end \n 大概像是這幾行 \n 以下是手臂的程式 \n ------------------------------------------------------------------------------------------------------- \n function sysCall_init()  axis1=sim.getObject(\'/motor1\')\xa0 \xa0\xa0  axis2=sim.getObject(\'/motor2\')  axis3=sim.getObject(\'/motor6\')  suctionPad=sim.getObject(\'/suctionPad\')  rotation1 = 0  rotation2 = 0  rotation3 = 0  deg = math.pi/180.  enableSuctionPad(true) end function enableSuctionPad(enable)  -- use the suctionPad object to pass the variable activity value  -- if enable = true, the activity = \'on\'  if enable then  sim.writeCustomDataBlock(suctionPad,\'activity\',\'on\')  else  sim.writeCustomDataBlock(suctionPad,\'activity\',\'off\')  end end function sysCall_actuation()  --[[  rotation1 = rotation1 + 1*deg  print(rotation1)  sim.setJointPosition(axis1, -rotation1)  sim.setJointPosition(axis2, -rotation1) ]]  message, auxiliaryData=sim.getSimulatorMessage()  while message ~= -1 do  key=auxiliaryData[1]  sim.addStatusbarMessage(\'user press key:\'..key)  if (message==sim.message_keypress) then  --if (auxiliaryData[1]==112) then --p activate the suction pad  if (auxiliaryData[1]==string.byte(\'p\')) then  -- if key p pressed activate the suction mode --sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'true\')  enableSuctionPad(true)  end -- if p  if (auxiliaryData[1]==string.byte(\'q\')) then --q deactivate the suction pad  -- if key q pressed deactivate the suction mode --sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'false\')  enableSuctionPad(false)  end -- if q  if (auxiliaryData[1]==string.byte(\'k\')) then --k right turn in degree  -- if key k pressed axis1 angle adds 2 degrees  rotation1 = rotation1 + 1*deg  --sim.setJointPosition(axis1, rotation1)  sim.setJointTargetPosition(axis1, rotation1)  end -- if k  if (auxiliaryData[1]==string.byte(\'l\')) then --l left turn in degree  -- if key l pressed axis1 angle substract 2 degrees  rotation1 = rotation1 - 1*deg  --sim.setJointPosition(axis1, rotation1)  sim.setJointTargetPosition(axis1, rotation1)  end -- if l -- for joint2 start ##########################################################  if (auxiliaryData[1]== string.byte("h")) then --r right turn in degree  -- if key r pressed axis1 angle adds 2 degrees  rotation2 = rotation2 + 1*deg  --sim.setJointPosition(axis2, rotation2)  sim.setJointTargetPosition(axis2, rotation2)  end -- if k  if (auxiliaryData[1]==string.byte("j")) then  -- if key j pressed axis2 angle substract 2 degrees  rotation2 = rotation2 - 1*deg  --sim.setJointPosition(axis2, rotation2)  sim.setJointTargetPosition(axis2, rotation2)  end -- if j -- for joint2 end ########################################################## -- for joint3 start ##########################################################  if (auxiliaryData[1]== string.byte("f")) then  -- if key f pressed axis3 angle adds 2 degrees  rotation3 = rotation3 + 1*deg  --sim.setJointPosition(axis3, rotation3)  sim.setJointTargetPosition(axis3, rotation3)  end -- if f  if (auxiliaryData[1]==string.byte("g")) then  -- if key g pressed axis3 angle substract 2 degrees  rotation3 = rotation3 - 1*deg  --sim.setJointPosition(axis3, rotation3)  sim.setJointTargetPosition(axis3, rotation3)  end -- if g -- for joint2 end ##########################################################  if (auxiliaryData[1]==100) then --d suction pad down  -- if key d pressed axis3 will down 0.05 m  distance3 = distance3 - 0.05  sim.setJointPosition(axis3, distance3)  end -- if d  if (auxiliaryData[1]==117) then --u suction pad up  -- if key u pressed axis3 will up 0.05 m  distance3 = distance3 + 0.05  sim.setJointPosition(axis3, distance3)  end -- if u  if (auxiliaryData[1]==99) then --c coordinate of block  blockPosition = sim.getObjectPosition(block, BaseFrame)  sim.addStatusbarMessage("coordinate:"..table_to_string(blockPosition))  end --if c  end -- if  message, auxiliaryData=sim.getSimulatorMessage()  end -- while end -- function \n function sysCall_sensing()  --[[  -- Read Proximity sensor (0= nothing detected, 1 = object detected)  local res = sim.readProximitySensor(proximity) \n -- Check if possible to insert an new box  if (sim.getSimulationTime()-T_last_inserted > T_insert) and not hasStopped then  insertBox()  end \n -- If proximity sensor detects an object, stop the belt, stop inserting objects  if res == 1 and not hasStopped then  if boolList[1] then  sim.setScriptSimulationParameter(sim.handle_self,"conveyorBeltVelocity",0)  deltaTime = sim.getSimulationTime()-T_last_inserted  hasStopped = true  else  local box = table.remove(boxList,1)  local boxDummy = table.remove(boxDummyList,1)  table.remove(boolList,1) \n sim.removeObject(box)  sim.removeObject(boxDummy)  end  end \n -- If proximity sensor detects nothing and belt has stopped, start belt, continue inserting  if res == 0 and hasStopped then  sim.setScriptSimulationParameter(sim.handle_self,"conveyorBeltVelocity",beltSpeed)  hasStopped = false  T_last_inserted = sim.getSimulationTime()-deltaTime  end   ]]-- end function sysCall_sensing()  -- put your sensing code here end function sysCall_cleanup()  -- do some clean-up here end -- Convert a lua table into a lua syntactically correct string function table_to_string(tbl)  local result = "{"  for k, v in pairs(tbl) do  -- Check the key type (ignore any numerical keys - assume its an array)  if type(k) == "string" then  result = result.."[\\""..k.."\\"]".."="  end  -- Check the value type  if type(v) == "table" then  result = result..table_to_string(v)  elseif type(v) == "boolean" then  result = result..tostring(v)  else  v = round(v, 4)  result = result.."\\""..v.."\\""  end  result = result..","  end  -- Remove leading commas from the result  if result ~= "" then  result = result:sub(1, result:len()-1)  end  return result.."}" end function round(x, n)  n = math.pow(10, n or 0)  x = x * n  if x >= 0 then x = math.floor(x + 0.5) else x = math.ceil(x - 0.5) end  return x / n end function insertBox()  -- Generate random numbers  local rand1 = math.random()  local rand2 = math.random()  local rand3 = math.random()  -- Generate random disturbances on position and orientation  local dx = (2*rand1-1)*0.1  local dy = (2*rand2-1)*0.1  local dphi = (2*rand3-1)*0.5  local disturbedCoordinates = {0,0,0}  disturbedCoordinates[1] = insertCoordinate[1]+dx  disturbedCoordinates[2] = insertCoordinate[2]+dy  disturbedCoordinates[3] = insertCoordinate[3]  -- Copy and paste box and boxDummy  local insertedObjects = sim.copyPasteObjects({box,boxDummy},0)  -- Update last inserted box time  T_last_inserted = sim.getSimulationTime()  -- Move and rotate  sim.setObjectPosition(insertedObjects[1],-1,disturbedCoordinates)  sim.setObjectOrientation(insertedObjects[1],-1,{0,0,dphi})  -- Store handles to boxes and dummies  table.insert(boxList,insertedObjects[1])  table.insert(boxDummyList,insertedObjects[2])   -- Decide if object is good or bad  local decision = math.random()   if decision <= goodPercentage then  -- Object is good, assign goodColor  sim.setShapeColor(insertedObjects[1],nil,sim.colorcomponent_ambient_diffuse,goodColor)  table.insert(boolList,true)  else  -- Object is bad, assign random color  sim.setShapeColor(insertedObjects[1],nil,sim.colorcomponent_ambient_diffuse,{rand1,rand2,rand3})  table.insert(boolList,false)  end end -- See the user manual or the available code snippets for additional callback functions and details \n ------------------------------------------------------------------------------------------------------- \n', 'tags': '', 'url': 'W15.html'}, {'title': 'w14零件檔', 'text': '此為第5組大家目前已畫出的NX1980版本的零件檔 \n 1.prt \n 2.prt \n 3.prt \n 4.prt \n 7.prt \n 8.prt \n 9.prt \n 10.prt \n 11.prt \n 12.prt \n 13.prt \n 14.prt \n 15.prt \n 分配名單為下圖某一次開會決定 \n \n', 'tags': '', 'url': 'w14零件檔.html'}, {'title': 'W14', 'text': '這一周基本瞭解到了uarm的一些做控制以及NX關於如何使用程式去控制尺寸的內容， \n 還有將簡易的圖分給各組員畫，會再將各組員的圖統整在這裡的 \n 40923123 \n 零件9:\xa0 9.prt \n 零件10:\xa0 10.prt \n 這週學習影片的網址:  https://youtu.be/zCb26YXKSr8 \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W12', 'text': '此為第12周內容 \n 各分組在執行 \xa0 w8 任務 之後, 請回答下列問題: \n \n cd2022_uarm_nx12_imported.7z \xa0 中, 若計入重複引用的零件, 總數有多少? 請列出組成此一 uarm 機械手臂所需的 BOM 列表. \n 若不計入重複引用的零件, 總數有多少? 請列出各零件名稱. \n 當執行機械手臂的設計過程中, 若已知各零件所擬採用的零件材料密度, 請問此一設計中的 uarm 機械手臂的淨重量為多少? ( uArm-Swift-Specifications.pdf ) \n 當執行機械手臂設計與製程規劃時, 若已知各零件擬採行的製造程序、取得方法與所需時間及成本, 請問此一設計中的 uarm 機械手臂, 該如何計算一定數量需求下, 需花費多少時間? 如何計算成本? \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'w12_cadlab_startup', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_cadlab_startup.html'}, {'title': 'w12_task', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_task.html'}, {'title': '大組倉儲更新步驟', 'text': '這一頁會講解應該如何更新大組倉儲步驟跟必須知道的東西 \n 首先在開始之前大家其實可以觀察一下你每次在更新網站也就是利用cmsimde時就竟都更改些什麼東西呢? \n \n 其實更改的檔案通常有三個其中兩個html檔事記錄你所有網頁的檔案，一個是現在一個是之前，然後還有一個js黨是老師的搜尋系統會自動抓取字串的程式，所以其實在更改之前你會發現如果要進行協同只要處理這三個檔案衝突即可，而js黨則是必須想辦法更改它程式再擷取字串的步驟或這手動暴力應改等之類的，簡單來說是這樣再來以下還有必須注意的。 \n 協同問題篇 \n 須注意同時的問題由於上述所說的主要是js黨的問題導致今天不管是同時修改同一頁資料或不同頁又或者不同頁的資料(是有不同差異的，另解說)都必須解決檔案相衝問題，在github上若檔案相衝github會幫忙用一個特殊格是把兩個相衝的部分框起來並告知，其實只要修改符合合併就能合併了。 \n 步驟解說篇 \n 在步驟前必須先完成以下步驟 \n 1.必須每個成員先將大組倉儲給 fork ，這樣就能獲得一個 自己帳號 的大組倉儲 \n 2.clone 自己帳號 的大組倉儲 \n 3.將倉儲內推送時的person key或者使用ssh的小夥伴必須將.git裡的內容修改成如同自己倉出一樣 \n 這樣就算完成了前置步驟了 \n 再來以下正式進入步驟 \n 1.更改完自己想要的內容後先用正常手續將內容推送至 自己帳號 下的大組倉儲 \n 2.在github上選擇Pull requests的按鍵 \n 3.將merge的消息傳回給組長的大組倉儲(綠綠的給他按下去就對了 \n 4.組長查驗確認沒問題即可merge \n 以上即是正常流程下最順利的狀況，接下來會稍微說明版本同步問題以及merge的衝突問題以及如何解決 \n 首先當近端及遠端的部分不同步 \n 因當先將github上的版本給同步，在觀察commit那一欄要是組長倉儲有更新那裏就可以更新版本 \n 變成和組長一樣，再來在近端用git pull將資料從遠端給抓下來做合併，這樣就完成了最簡單的更新自己的倉儲了。 \n 那如果在github上無法合併可以怎麼做呢? 那說明一件事你在進行merge時跟別人衝突到或者格是有問題之類的，簡單來說就是有問題之後沒更改之後又繼續更新所導致的，那可以試試以下的方法 \n \n 前面有說道能使用git pull進行同步，但是如果自己帳號下github的資料就不對了就算git pull也沒辦法那就使用 git pull 組長大組倉儲網址.git main \n 將正確內容最新版本同步下來後重新push一次到 自己帳號 下的大組倉儲，這樣就可以將遠端成功更新成正確的版本了 \n', 'tags': '', 'url': '大組倉儲更新步驟.html'}, {'title': 'w10_block_ui', 'text': '第一部加上一些註解的影片 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_block_ui.html'}, {'title': 'midterm', 'text': '這禮拜主要是先畫圖再進行組立然後放置coppeliasim進行模擬，再加上3軸UI介面進行控制 \n 在進行coppeliasim模擬有以下幾點要注意 \n 1軸在模擬時需增加轉速和扭力給他 \n 2中間相互連結且有移動的零件都必須把碰撞打開 \n 3UI介面的程式是加在最一開始的零件上的 \n 4若軸與兩組以上會動的零件相連需另用一個dummy去限制他 \n 操作流程如下 \n 1 先將組合圖匯入 \n 2 將組合圖零件炸開 \n 3 先定義基礎邊 \n 4 將軸開始從基礎邊一一接上去 \n 5 等都接完之後依上述說的將dummy加上去並進行限制，若遇到有街兩邊以上的軸藥劑的再多加dummy \n 6 將碰撞和軸的速度及扭力都打開 \n 7執行 \n 模擬的組立影片在此 影片 \n 結果 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'W7', 'text': '老師課程網頁內容  網址 \n 接下來會有wink影片進行解說 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': '問題集中串', 'text': '最後更新:2022/03/27 \n', 'tags': '', 'url': '問題集中串.html'}, {'title': '關於協同', 'text': '這一篇是我關於協同部分所寫的文章(僅供個人思想 \n 問題: \n 首先進行第一種猜想(能否讓所有組員同時進行倉儲修改? \n 目前的答案為否 \n 1.進行改版在上傳時是需要個人的KEY的，如果依字面上若想做倒他人也能上傳勢必要有倉儲組長個人的key，但是測試過key是沒有辦法多個帳號共用 \n 2.PPK同理一個PPK只能登記在一個帳號無法共用所以目前無法同時更新 \n 第二種猜想(假設可以同時更新那解決版本衝突得如何運行 \n 1.第一種情況如果一個文本在序列第40行後增加字串，那如果第二人在之後也以先前未改版版本進行並也在第40行之後進行更改兩邊發生衝突該如何解決? \n 我的想法是因該可以寫一段程式幫每則增加的訊息在添加之前把他們上一句進行標記，當今天標記衝突時程式可以跳出訊息並將此段訊息銜接在另一段上，也就是在推送之前先把別人的資料pull下來發現標記有更動則自動變更到新訊息的最後一行在推送 \n 2.第二種強況如在修改的檔案被人刪除時應該怎麼辦，簡單來說每則訊息甚至檔案都是有所謂的贆投如果今天在修改時標頭不見時會讓檔案無法分類進而導致錯亂，關於標題頭問題我之前有遇到類似的，USB裡的檔案貌似在退出時手續不對導致標題頭遺失，電腦沒有辦法綁資料分類導致所有相關檔案全部變成亂碼並且無法判斷數量及大小，目前個人猜想如果在編輯檔案時直接被其他人刪除時，在推送時應該會出現類似的問題，要修改的檔案被刪除電腦無法判斷訊息是被歸類在哪裡進而出現錯誤 \n 我的想法目前也只能將此段訊息用一個程式幫忙賦予新的檔案讓他在出現類似錯誤時先直接開新的檔案紀錄下來，後面再進行除錯 \n 第三種猜想(關於程式協同及機械類的協同 \n 課堂上老師說過程式協同其實相比於機械的協同是可以比較即時的，因為機械相關在協同是必須去與真實情況變動，並且機械及真實受限於很多的規則束腹很難做到非常及時的協同，畢竟很多零件並不像程式一樣隨叫隨到 \n', 'tags': '', 'url': '關於協同.html'}, {'title': '關於git指令失效', 'text': '事情緣由是由2022/03/22晚上在製作影片時發生目前還未知的問題進而導致git指令失效，目前推測原因還是未知，首先推送檔案並未超過(單個檔案>50MB，再者前面也有推送但是沒有問題，所以目前無法判斷有何種問題 \n 解決方法: 將整個近端資料夾刪除後再從github上重新複製下來就沒有問題，關於git並未更改其他東西只是在其他電腦時就自行解決了，有可能是git在運行時path錯亂沒有讀到相關git的執行檔所以才導致至些問題的 \n', 'tags': '', 'url': '關於git指令失效.html'}, {'title': 'W3', 'text': '我負責的影片為5部: \n 第1部:  影片網址 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 第9部:  影片網址   自己的示範影片網址 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 第14部:  影片網址 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 第19部:\xa0 影片網址 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 第31部:\xa0 影片網址 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': '小組名單', 'text': '組長: 40923123林坪橙\xa0\xa0 \n 網站 \xa0  倉儲 \n 組員: 40923139夏永晉 \n 網站 \xa0  倉儲 \n 組員: 40923142翁楷翔 \n 網站 \xa0  倉儲 \n 組員: 40923151許睿麒 \n 網站 \xa0  倉儲 \n', 'tags': '', 'url': '小組名單.html'}, {'title': '新增倉儲步驟', 'text': '原本cmsimde的內容主分支是master所以一開始他會因為遠端是main而無法推送，所以在近端新增main分支並將master merge到main裡，先用git remote add origin建立連結，然後在main的情況下把遠端的 README.md給pull下來 \n 簡單來說就是cmsimde本身是屬於master而遠端是main所以主要的大問題是處理分支衝突 \n 下方有影片可以點進去看裡面有詳細步驟還有字幕 \n test \n 影片連結 \n', 'tags': '', 'url': '新增倉儲步驟.html'}, {'title': 'wink test', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'wink test.html'}]};