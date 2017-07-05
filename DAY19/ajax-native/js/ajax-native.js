/*! ajax-native.js @ 2017, yamoo9.net */

(function (global){
    'use strict';
     
    // AJAX Native
    // 통신(요청/응답)을 위한 API (Back-End API)
    // 사용자 인터페이스에 업데이트 렌더링
    // 사용자 인터페이스에서 요구된 요청 사항 처리 (서버에 데이터 전송, 요청)
    // HTTP Methods
      // - GET
      // - POST
      // - PUT
      // - DELETE


    // 실습

    // 비동기 통신을 위한 객체 생성
    // 생성자 함수 XMLHttpRequest()를 사용
    // 반드시 new를 사용해야 합니다.
    var xhr = new XMLHttpRequest(); // 비동기 통신 객체 생성
    console.dir(xhr);

    // 비동기 통신을 사용할 경우,
    // 비동기 통신 상태에 따라 콜백되는 이벤트를 설정
    // xhr.onload = callbackCommunication;
    xhr.onreadystatechange = callbackCommunication;
    // 이벤트 바인딩되는 콜백 함수 정의
    function callbackCommunication() {
        console.log(arguments); // Event Object
        // return; // 함수 종료
        // 통신 상태 확인
        console.log('xhr 통신 상태는?', xhr.status);

        // 통신 상태가 O.K라면
        if ( xhr.status === 200 && xhr.readyState === 4 ) {
            console.log('통신 성공 :)');
            // 응답 데이터를 확인
            console.log('응답된 데이터 URL', xhr.responseURL);
            console.log('응답된 데이터 유형', xhr.responseType === ''); // true
            console.log('응답된 데이터', xhr.response);
            console.log('응답된 데이터', xhr.responseText);
        }
        // 통신 상태가 Fail 이라면
        if ( xhr.status === 404 ) {
            console.log('통신 실패 :(');
        }
    }


    // 동기 통신 방법을 선택
    // xhr.open('GET', '../DB/book.txt', false);
    // 현재 통신 방식은 동기(Sync)이기에 아래 코드는 대기 후에 실행
    
    // 비동기 통신 방법을 선택
    // 현재 통신 방식은 비동기(Async)이기에 아래 코드는 대기하지 않고 바로 실행
    xhr.open('GET', '../DB/book.txt');
    // 서버에 요청(보내기)
    xhr.send(null);

     // ------------------------------------------------------------------------

    // AJAX Library (FDS.ajax)
        // - jQuery AJAX
        // - axios

}) // (window);

// 비동기 통신 이벤트 제어 프로그래밍
{
    let xhr = null;
    let print_btn = document.querySelector('.print-ajax-btn');
    let data_zone = document.querySelector('.data-zone');
    let data_url = '../DB/people.json';
    let renderAjaxData = ()=> {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = printAjaxData;
        xhr.open('GET', data_url, true);
        xhr.send(null);
        // 클릭 후, 비활성화
        print_btn.removeEventListener('click', renderAjaxData, true);
        // print_btn.setAttribute('disabled', 'disabled');
    };
    let printAjaxData = ()=> {
        if ( xhr.status === 200 && xhr.readyState === 4 ) {
            
            // console.log('status is 200 ....');
            // 사용자에게 현재 데이터 로딩 중임을 표시
            // data_zone.innerHTML = '로딩 중입니다......';

            // 경우 1. text 데이터 포멧일 경우:
            // 일반 텍스트이기 때문에 붙여주기만 하면 된다.
            // data_zone.innerText = xhr.responseText;
            
            // 경우 2. HTML 데이터 포멧일 경우:
            // HTML 코드(Template) + 실제 데이터(Data) 바인딩(Binding)
            data_zone.classList.remove('has-text-centered');
            // data_zone.innerHTML = renderDataBinding(xhr);

            // 경우 3. XML 데이터 포멧일 경우:
            // data_url 값을 DB/user.xml로 변경
            // console.log('xhr.response:', xhr.response);
            // console.log('xhr.responseText:', xhr.responseText);
            // console.log('xhr.responseType:', xhr.responseType);
            // console.log('xhr.responseXML:', xhr.responseXML);
            // let doc = xhr.responseXML;
            // let results = doc.querySelectorAll('user > results');
            // let user_collection = [];
            // [].forEach.call(results, function(result){
            //     let name = {
            //         first: result.querySelector('name > first').textContent,
            //         last: result.querySelector('name > last').textContent
            //     };
            //     let email  = result.querySelector('email').textContent;
            //     let gender = result.querySelector('gender').textContent;
            //     let user   = {
            //         name: `${name.first} ${name.last}`,
            //         email,
            //         gender
            //     };
            //     user_collection.push(user);
            // });
            // data_zone.innerHTML = renderTableUserCollection(user_collection);
        
            // 경우 4. JSON 데이터 포멧일 경우:
            // data_url 값이 DB/people.json 인 경우
            // console.log(xhr.responseText);
            // JSON 문자 데이터를 객체화
            let user_collection = [];
            JSON.parse(xhr.responseText).forEach(function(user,index){
                user_collection.push({
                    name: user.name,
                    gender: user.gender === 'female' ? '여성' : '남성',
                    email: user.email
                });
            });
            data_zone.innerHTML = renderTableUserCollection(user_collection);
        } 

        // 오류 발생 시
        else if ( xhr.status > 400 ) {
            data_zone.innerHTML = '통신에 실패했습니다 :(';
            data_zone.style.cssText = 'color: #ef1a62';
            window.setTimeout(function(){
                data_zone.removeAttribute('style');
            }, 1400);
        }
        // 로딩 중...
        else {
            // data_zone.innerHTML = '로딩 중입니다........';
            data_zone.innerHTML = '<span class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-label="로딩중..."></span>';
        }
    };
    let renderDataBinding = xhr => {
        var frag      = document.createDocumentFragment();
        var frag_root = document.createElement('div');
        frag.appendChild(frag_root);
        frag_root.innerHTML = xhr.response;
        frag_root.querySelector('.status').textContent   = xhr.status;
        frag_root.querySelector('.url').textContent      = xhr.responseURL;
        frag_root.querySelector('.type').textContent     = xhr.responseType === '' ? 'TEXT 또는 HTML' : '';
        frag_root.querySelector('.response').textContent = xhr.response;
        return frag_root.innerHTML;
    };
    let renderTableUserCollection = collection => {
        let table_template = document.querySelector('#user-table-template').innerHTML;
        table_template = table_template.split('<tbody></tbody>');
        let content_template = `${table_template[0]}<tbody class="tbody">`;
        collection.forEach(function(user, index){
            let n = index + 1;
            n = n < 10 ? '0' +n : n;
            content_template += `
                <tr class="tr">
                <td class="td num">${n}</td>
                <td class="td name">${user.name}</td>
                <td class="td gender">${user.gender}</td>
                <td class="td email">${user.email}</td>
                <td class="td etc"></td>
                </tr>
            `;   
        });
        content_template += '</tbody>' + table_template[1];
        return content_template;
    };
    print_btn.addEventListener('click', renderAjaxData, true);
} 