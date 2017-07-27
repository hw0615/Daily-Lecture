<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <!-- ///// 텍스트 인풋 예시 ///// -->
        <div class="field">
          <label class="label" for="user_name">이름</label>
          <p class="control">
            <input 
              @input="detectEventBinding('name', $event)"
              :value="user.name"
              id="user_name" 
              class="input" 
              type="text" 
              placeholder="이민기">
          </p>
        </div>

        <div class="field">
          <label for="user_id" class="label">아이디</label>
          <p class="control has-icon has-icon-right">
            <!-- is-success -->
            <input id="user_id" class="input" type="text" placeholder="lee-MK">
            <!--<span class="icon is-small" aria-label="사용 가능">
              <i class="fa fa-check" aria-hidden="true"></i>
            </span>-->
          </p>
          <!--<p class="help is-success">입력한 아이디는 사용 가능합니다.</p>-->
        </div>

        <!-- ///// 이메일 예시 ///// -->
        <div class="field">
          <label for="user_email" class="label">이메일</label>
          <p class="control has-icon has-icon-right">
            <!-- is-danger -->
            <input v-model="user.email" id="user_email" class="input" type="text" placeholder="user@host.io">
            <!--<span class="icon is-small" aria-label="양식 오류">
              <i class="fa fa-warning" aria-hidden="true"></i>
            </span>-->
          </p>
          <!--<p class="help is-danger">입력된 이메일 양식이 잘못되었습니다.</p>-->
        </div>

        <!-- ///// 라디오버튼 예시 ///// -->
        <div class="field">
          <label class="label" for="user_career">경력 여부</label>
          <p class="control">
            <label class="radio">
              <input v-model="user.role" id="user_career" type="radio" name="role" value="junior" checked>
              신입
            </label>
            <label class="radio">
              <input v-model="user.role" type="radio" name="role" value="senior">
              경력자
            </label>
          </p>
        </div>

        <!-- ///// 넘버(숫자) 인풋 예시 ///// -->
        <div v-if="user.role === 'senior'" class="field">
          <label for="user_senior_career" class="label">경력 연차</label>
          <p class="control">
            <input
              type="number"
              v-model.number="user.career"
              min="1"
              max="30"
              id="user_senior_career"
              class="input"
            >
          </p>
        </div>

        <!-- ///// 체크박스 예시 ///// -->
        <!-- <div class="field">
          <label for="user_field" class="label">지원 분야</label>
          <p class="control">
            <label class="checkbox">
              <input v-model="user.field" id="user_field" value="plan" type="checkbox"> 웹 기획
            </label>
          </p>
          <p class="control">
            <label class="checkbox">
              <input v-model="user.field" value="design" type="checkbox"> 웹 디자인
            </label>
          </p>
          <p class="control">
            <label class="checkbox">
              <input v-model="user.field" value="frontend" type="checkbox"> 프론트엔드 개발
            </label>
          </p>
          <p class="control">
            <label class="checkbox">
              <input v-model="user.field" value="backend" type="checkbox"> 백엔드 개발
            </label>
          </p>
        </div> -->

        <!-- ///// 셀렉트 메뉴 예시 ///// -->
        <div class="field">
          <label for="user_field" class="label">지원 분야</label>
          <p class="control">
            <span class="select">
              <select id="user_field" v-model="user.field">
                <option 
                  v-for="(content,index) in field_contents" 
                  :disabled="!content.value"
                  :value="content.value"
                  :key="'user_field-'+index">{{ content.label }}</option>
                <!-- <option value="" disabled>지원 분야를 선택해주세요.</option>
                <option value="plan">웹 기획</option>
                <option value="design">웹 디자인</option>
                <option value="frontend">프론트엔드 개발</option>
                <option value="backend">백엔드 개발</option> -->
              </select>
            </span>
          </p>
        </div>

        <!-- ///// 텍스트 영역 예시 ///// -->
        <div class="field">
          <label for="user_message" class="label">내용</label>
          <p class="control">
            <textarea
              @input="detectEventBinding('message', $event)"
              :value="user.message" 
              id="user_message" 
              class="textarea" 
              placeholder="주제와 관련 내용을 입력해주세요."></textarea>
          </p>
        </div>

        <!-- ///// 체크박스 예시 ///// -->
        <div class="field">
          <p class="control">
            <label for="user_remember" class="checkbox">
              <input v-model="user.remember" type="checkbox" id="user_remember">
              입력한 사용자 정보를 기억합니다.
            </label>
          </p>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <button type="submit" class="button is-primary">전송</button>
          </p>
          <p class="control">
            <button type="reset" class="button is-link">취소</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        name: '',
        email: '',
        message: '',
        career: 1,
        role: "junior",
        // field: ['frontend'], // e,g) checkbox
        field: '',              // e,g) select menu
        remember: false,
      },
      field_contents: [
        { value: '', label: '지원 분야를 선택해주세요.' },
        { value: 'plan', label: '웹 기획' },
        { value: 'design', label: '웹 디자인' },
        { value: 'frontend', label: '프론트엔드 개발' },
        { value: 'backend', label: '백엔드 개발' }
      ]
    }
  },
  methods: {
    detectEventBinding(target, e){
      this.user[target] = e.target.value;
    }
  }
}
</script>

<style lang="sass" scoped>
html
  font-size: 100%
  background: #fff
body
  margin: 0
</style>
