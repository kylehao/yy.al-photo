  //��ʾ���������
  function MenuSwitch(PopMenuObj) {
       var  CurrentObj;
       CurrentObj = eval(PopMenuObj);
       if (CurrentObj){
          if (CurrentObj.style.visibility == 'hidden'){
              CurrentObj.style.visibility = 'visible';
          }else{
              CurrentObj.style.visibility = 'hidden';
          }
      }
  }

//��������ҳ��
    function Todoopen(URLPage){
       parent.location.href=URLPage;
       }

//��ͬһ��ҳ����߿������ʾ  
 function Todoopenself(URLPage){
    self.location.href=URLPage;
       }

//���¼�ҳ��
function Todoopen1(URLPage){
       parent.parent.location.href=URLPage;
       }

//���¼�ҳ��
function Todoopen4(URLPage){
       parent.parent.parent.location.href=URLPage;
       }

//targetname��ͬ��ҳ�����
    function Todoopen2(URLPage){
       vpage.location.href=URLPage;
       
       }

//targetname��ͬ��ҳ����������Ŀ��λ�ó���
function Todoopen3(URLPage){
       vpage.location.href=URLPage;
       document.body.scrollLeft=parseInt(document.body.clientWidth);
       }

//targetname��ʫ����ͬ��ҳ����������Ŀ��λ�ó���
function Todoopen5(URLPage){
    parent.parent.document.body.scrollLeft=parseInt(parent.document.body.clientWidth)/2;   
    parent.page2.location.href=URLPage;
       
       }

 //ע�ᴰ��
 function opennewwindow(url)
 {
  var name="regist";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=448,height=420");
 }

 //��¼����
 function openloginwindow(url)
 {
  var name="login";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=346,height=280");
 }

 //������ʴ���
 function openDianguWindow(url)
 {
 var name="diangu";
 window.open(url,name,"resizable=yes,menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes, width=400,height=480");
 }

 
 //����������������
 function openSeaWindow(url){
 	var name="search";
	window.open(url,name,"width=584,height=440");
}


 //�򿪷�ҳ��������
  function DoMenu(MenuValue){
      location.href=MenuValue;
      return true;
   }

//ҳ������������
function GoHead(){
   parent.document.body.scrollLeft=0;
}

//������ť
function ShowImg(ImgName,ImgFlag) {
      if (ImgFlag==1){
	     TheImg = eval(ImgName+"F.src");
      }else{
	     TheImg = eval(ImgName+"B.src");
	  }
      document [ImgName].src = TheImg;
      return true;
   }


//�ռ�ʫ��

 function openscreen(url)
 {
  var name="regist";
  window.open(url,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=736,height=426");
 }

 function opencontact(email)
 {
  var name="contact";
  window.open(email,name,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=yes,width=500,height=288");
 }

//


function RecordOption(Flag)
  {
  var length = document.recordfrm.elements.length 
  var recordindex 
  var selectedstring 
  selectedstring="" 
  for (var i=(length-1); i>=0; i--) 
  { 
    recordindex  = document.recordfrm.elements[i].name.indexOf("record"); 
    if (recordindex  != -1) { 
        if (document.recordfrm.elements[i].checked){ 
           if (selectedstring == "") 
              selectedstring = document.recordfrm.elements[i].value; 
           else { 
              selectedstring = selectedstring  + "," + document.recordfrm.elements[i].value;
           } 
        } 
    } 
  } 
  if (selectedstring != "") { 
           window.location="DelFrm.asp?SelectedItems=" + selectedstring; 
     } 
    
  else {
       alert("��ѡ��Ҫɾ���ļ�¼!");
   }
  return; 
  }

function selectall()
  {
  var setcheck,length;
  length = document.recordfrm.elements.length ;
  if (document.recordfrm.setall.value == 0){
      document.recordfrm.setall.value = 1;
      setcheck = true;
  }else{
      document.recordfrm.setall.value = 0;
      setcheck = false;
  }
  for (var i=0; i<length; i++) { 
      if (document.recordfrm.elements[i].name.indexOf("record") != -1) 
         document.recordfrm.elements[i].checked = setcheck; 
  } 
  return;
  }