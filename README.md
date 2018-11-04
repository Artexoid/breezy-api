# Breezy API

Use this wrapper to easily access the Breezy API.

## Requirements

- Node v8 or higher

## Install

`yarn add breezy-api`  
OR  
`npm install breezy-api --save`

## Usage

1. Include the api: 

```javascript
const BreezyApi = require('breezy-api')
```

2. Make a call to get your access token:

```javascript
const authResponse = await BreezyApi.auth.signin('<EMAIL>','<PASSWORD>')
const accessToken = authResponse.access_token
/* SAVE TOKEN SOMEWHERE */
```

3. Use access token to make further calls!  

```javascript
const company = await BreezyApi.company.get('<ACCESS_TOKEN>', <COMPANY_ID>')
```

## Methods

### Auth

```javascript
BreezyApi.auth.signin('<EMAIL>', '<PASSWORD>')
BreezyApi.auth.signout('<ACCESS_TOKEN>')
```

### Company

```javascript
BreezyApi.company.get('<ACCESS_TOKEN>', '<COMPANY_ID>')
BreezyApi.company.pipeline('<ACCESS_TOKEN>', '<COMPANY_ID>', '<PIPELINE_ID>')
BreezyApi.company.all_pipelines('<ACCESS_TOKEN>', '<COMPANY_ID>')
BreezyApi.company.questionnaire('<ACCESS_TOKEN>', '<COMPANY_ID>', '<QUESTIONNAIRE_ID>')
BreezyApi.company.all_questionnaires('<ACCESS_TOKEN>', '<COMPANY_ID>')
BreezyApi.company.template('<ACCESS_TOKEN>', '<COMPANY_ID>', '<TEMPLATE_ID>')
BreezyApi.company.all_templates('<ACCESS_TOKEN>', '<COMPANY_ID>')
BreezyApi.company.all('<ACCESS_TOKEN>')
```

### Position

```javascript
BreezyApi.position.get('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>')
BreezyApi.position.update('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<POSITION_OBJECT>')
BreezyApi.position.update_state('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<STATE_OBJECT>')
BreezyApi.position.stream('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>')
BreezyApi.position.team('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>')
BreezyApi.position.all('<ACCESS_TOKEN>', '<COMPANY_ID>', '<STATE>')
BreezyApi.position.new('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_OBJECT>')
```

### Candidate

```javascript
BreezyApi.candidate.get('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.get('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<CANDIDATE_OBJECT>')
BreezyApi.candidate.assessments('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.background_checks('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.conversation('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<INCLUDE_DELAYED>', '<SKIP>')
BreezyApi.candidate.new_conversation('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<CONVERSATION_OBJECT>')
BreezyApi.candidate.documents('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.add_document('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<DOCUMENT_BUFFER>')
BreezyApi.candidate.add_education('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<EDUCATION_OBJECT')
BreezyApi.candidate.meta('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.move('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<MOVE_OBJECT>')
BreezyApi.candidate.save_questionnaire('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<QUESTIONNAIRE_ID>', '<RESPONSES_OBJECT>')
BreezyApi.candidate.questionnaires('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.add_resume('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<RESUME_BUFFER>')
BreezyApi.candidate.send_questionnaire('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<QUESTIONNAIRE_ID>', '<SHOULD_EMAIL>')
BreezyApi.candidate.move_to_stage('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<STAGE_ID>')
BreezyApi.candidate.stream('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>')
BreezyApi.candidate.add_note_to_stream('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<NOTE_OBJECT>')
BreezyApi.candidate.add_work_history('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_ID>', '<HISTORY_OBJECT>')
BreezyApi.candidate.all('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<PAGE>', '<PAGE_SIZE>', '<SORT>')
BreezyApi.candidate.new('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<CANDIDATE_OBJECT>')
BreezyApi.candidate.new_from_resume('<ACCESS_TOKEN>', '<COMPANY_ID>', '<POSITION_ID>', '<STAGE_ID>', '<ACTIONS_ENABLED>', '<RESUME_BUFFER>')
BreezyApi.candidate.search('<ACCESS_TOKEN>', '<COMPANY_ID>', '<EMAIL_ADDRESS>')
```

# License

Copyright 2018 Alex Sopinka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.