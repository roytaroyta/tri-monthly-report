import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { generateClient } from 'aws-amplify/api';
import { createMonthlyReport } from '../../graphql/mutations';
import { CreateMonthlyReportInput } from '../../API'; 
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';

import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText
} from '@mui/material';

// AWS Amplifyの設定
const client = generateClient();
Amplify.configure(config);

// DynamoDBにデータを保存する関数
async function saveReport(input: CreateMonthlyReportInput) {
  try {
    console.log('データ保存処理開始',createMonthlyReport,input);
    const result = await client.graphql<CreateMonthlyReportInput>({
    //const result = await client.graphql<GraphQLResult<{ createMonthlyReport: CreateMonthlyReportInput }>>({
      query: createMonthlyReport,
      variables: { input: input },
     //authMode: "AMAZON_COGNITO_USER_POOLS" 
    });
    console.log('Monthly Report created:', result);
    return result;
  } catch (error) {
    console.error('Error creating monthly report:', error);
    console.log('エラー', error);

    throw error; // エラーを再スローして呼び出し元で処理できるようにする
  }
}

// メインのReactコンポーネント
const MonthlyReportForm: React.FC = () => {
  console.log('月報入力開始');
  let today = new Date();
  let formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  // フォームの初期値を設定
  const initialValues = {
    targetMonth: '',
    reportDate: '',
    companyName: 'a',
    jobDescription: 'b',
    jobScale: 'c',
    workTools: 'd',
    achievements: 'e',
    challenges: 'f',
    measures: 'g',
    healthStatus: '',
    physicalCondition: '',
    mentalCondition: '',
    healthNotes: '',
    consultationRequest: '',
    consultationPartner: '',
    consultationContent: '',
    clientChangeRequest: '',
    clientChangeContent: '',
    workQuality: '',
    workQuantity: '',
    clientRelationship: '',
    communication: '',
    greetingAndLanguage: '',
    proactivity: '',
    responsibility: '',
    cooperation: '',
    internalInteraction: '',
    skillAcquisitionEfforts: '',
    informationProvision: '',
    internalProposals: '',
    complaints: '',
    freeComments: '',
  };

  // Yupを使用してバリデーションスキーマを定義
  const validationSchema = Yup.object().shape({
    //targetMonth: Yup.date().required('必須項目です'),
    reportDate: Yup.date().required('必須項目です'),
    companyName: Yup.string().required('会社名は必須です'),
    jobDescription: Yup.string().required('業務概要は必須です'),
    jobScale: Yup.string().required('業務規模は必須です'),
    workTools: Yup.string().required('作業ツールは必須です'),
    achievements: Yup.string().required('成果は必須です'),
    challenges: Yup.string().required('課題は必須です'),
    measures: Yup.string().required('対策は必須です'),
    healthStatus: Yup.string().required('健康状況は必須です'),
    physicalCondition: Yup.string().required('体調面は必須です'),
    mentalCondition: Yup.string().required('メンタル面は必須です'),
    healthNotes: Yup.string(),
    consultationRequest: Yup.string().required('相談希望は必須です'),
    //   consultationPartner: Yup.string().when('consultationRequest', (value: string, schema) => {
    //     return value === '有' ? schema.required('相談相手は必須です') : schema;
    //   }),
    //   consultationContent: Yup.string().when('consultationRequest', {
    //     is: '有',
    //     then: Yup.string().required('相談内容は必須です'),
    //   }),
    clientChangeRequest: Yup.string().required('客先変更希望は必須です'),
    //   clientChangeContent: Yup.string().when('clientChangeRequest', {
    //     is: '有',
    //     then: Yup.string().required('希望内容は必須です'),
    //   }),
    workQuality: Yup.string().required('仕事の質は必須です'),
    workQuantity: Yup.string().required('仕事の量は必須です'),
    clientRelationship: Yup.string().required('客先/顧客との信頼関係構築は必須です'),
    communication: Yup.string().required('コミュニケーションは必須です'),
    greetingAndLanguage: Yup.string().required('挨拶、言葉遣いは必須です'),
    proactivity: Yup.string().required('積極性、向上心は必須です'),
    responsibility: Yup.string().required('責任感は必須です'),
    cooperation: Yup.string().required('協調性は必須です'),
    internalInteraction: Yup.string().required('社内交流は必須です'),
    skillAcquisitionEfforts: Yup.string().required('スキル習得の取組みは必須です'),
    informationProvision: Yup.string().required('情報提供活動は必須です'),
    internalProposals: Yup.string().required('社内提案は必須です'),
    complaints: Yup.string().required('業務に対する不満および問題点、改善希望は必須です'),
    freeComments: Yup.string(),
  });

  // フォーム送信時の処理
  const handleSubmit = async (values: any, { setSubmitting, setStatus }: any) => {
    try {
        console.log('submit処理');
        // すべてのフォーム値をJSON文字列に変換
        const contentJson = JSON.stringify(values);
        // CreateMonthlyReportInput オブジェクトを作成
        const input: CreateMonthlyReportInput = {
            email: '',
            reportMonth: values.targetMonth,
            submissionDate: values.reportDate,
            content: contentJson,
            status: '記載済み',
            feedback: '',
        }
      console.log('保存前',input);
      saveReport(input);
      console.log('データが正常に保存されました');
      setStatus({ success: 'データが正常に保存されました' });
    } catch (error) {
      setStatus({ error: 'データ保存中にエラーが発生しました' });
      console.error('データ保存中にエラーが発生しました:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // Formikコンポーネントを使用してフォームを作成
    <Formik
      initialValues={initialValues}
      //validationSchema={validationSchema}
      validationSchema={""}
      onSubmit={handleSubmit}
      //onSubmit={(values) => console.log(values)}

      // onSubmit={(values, { setSubmitting }) => {
      //   console.log('submittest');
      //       setTimeout(() => {
      //         alert(JSON.stringify(values, null, 2));
      //         setSubmitting(false);
      //       }, 400);
      //     }}
    >
      {({ errors, touched, values, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                月報入力フォーム
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="targetMonth"
                label="対象月"
                type="month"
                variant="outlined"
                fullWidth
                error={Boolean(touched.targetMonth && errors.targetMonth)}
                helperText={touched.targetMonth && errors.targetMonth}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="reportDate"
                label="記入日"
                type="date"
                fullWidth
                error={touched.reportDate && errors.reportDate}
                helperText={touched.reportDate && errors.reportDate}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">配属先</Typography>
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="companyName"
                label="会社名"
                fullWidth
                error={touched.companyName && errors.companyName}
                helperText={touched.companyName && errors.companyName}
              />

            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="jobDescription"
                label="業務概要"
                multiline
                rows={4}
                fullWidth
                error={touched.jobDescription && errors.jobDescription}
                helperText={touched.jobDescription && errors.jobDescription}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="jobScale"
                label="業務規模(人数、チーム構成)"
                fullWidth
                error={touched.jobScale && errors.jobScale}
                helperText={touched.jobScale && errors.jobScale}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="workTools"
                label="作業ツール(CAD/開発言語等)"
                fullWidth
                error={touched.workTools && errors.workTools}
                helperText={touched.workTools && errors.workTools}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="achievements"
                label="成果"
                multiline
                rows={4}
                fullWidth
                error={touched.achievements && errors.achievements}
                helperText={touched.achievements && errors.achievements}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="challenges"
                label="課題"
                multiline
                rows={4}
                fullWidth
                error={touched.challenges && errors.challenges}
                helperText={touched.challenges && errors.challenges}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="measures"
                label="対策"
                multiline
                rows={4}
                fullWidth
                error={touched.measures && errors.measures}
                helperText={touched.measures && errors.measures}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">健康状況</Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={Boolean(touched.healthStatus && errors.healthStatus)}>
                <InputLabel>ステータス</InputLabel>
                <Field as={Select} name="healthStatus">
                  <MenuItem value="良好">良好</MenuItem>
                  <MenuItem value="普通">普通</MenuItem>
                  <MenuItem value="不調">不調</MenuItem>
                </Field>
                <FormHelperText>{touched.healthStatus && errors.healthStatus}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={Boolean(touched.physicalCondition && errors.physicalCondition)}>
                <InputLabel>体調面</InputLabel>
                <Field as={Select} name="physicalCondition">
                  <MenuItem value="良好">良好</MenuItem>
                  <MenuItem value="普通">普通</MenuItem>
                  <MenuItem value="不調">不調</MenuItem>
                </Field>
                <FormHelperText>{touched.physicalCondition && errors.physicalCondition}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={Boolean(touched.mentalCondition && errors.mentalCondition)}>
                <InputLabel>メンタル面</InputLabel>
                <Field as={Select} name="mentalCondition">
                  <MenuItem value="良好">良好</MenuItem>
                  <MenuItem value="普通">普通</MenuItem>
                  <MenuItem value="不調">不調</MenuItem>
                </Field>
                <FormHelperText>{touched.mentalCondition && errors.mentalCondition}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="healthNotes"
                label="特記事項"
                multiline
                rows={4}
                fullWidth
                error={touched.healthNotes && errors.healthNotes}
                helperText={touched.healthNotes && errors.healthNotes}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">相談希望</Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={Boolean(touched.consultationRequest && errors.consultationRequest)}>
                <InputLabel>相談希望</InputLabel>
                <Field as={Select} name="consultationRequest">
                  <MenuItem value="有">有</MenuItem>
                  <MenuItem value="無">無</MenuItem>
                </Field>
                <FormHelperText>{touched.consultationRequest && errors.consultationRequest}</FormHelperText>
              </FormControl>
            </Grid>

            {values.consultationRequest === '有' && (
              <>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="consultationPartner"
                    label="相談相手"
                    fullWidth
                    error={touched.consultationPartner && errors.consultationPartner}
                    helperText={touched.consultationPartner && errors.consultationPartner}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="consultationContent"
                    label="相談内容"
                    multiline
                    rows={4}
                    fullWidth
                    error={touched.consultationContent && errors.consultationContent}
                    helperText={touched.consultationContent && errors.consultationContent}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Typography variant="h6">客先変更希望（技術部のみ）</Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth error={Boolean(touched.clientChangeRequest && errors.clientChangeRequest)}>
                <InputLabel>客先変更希望</InputLabel>
                <Field as={Select} name="clientChangeRequest">
                  <MenuItem value="有">有</MenuItem>
                  <MenuItem value="無">無</MenuItem>
                </Field>
                <FormHelperText>{touched.clientChangeRequest && errors.clientChangeRequest}</FormHelperText>
              </FormControl>
            </Grid>

            {values.clientChangeRequest === '有' && (
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  name="clientChangeContent"
                  label="希望内容"
                  multiline
                  rows={4}
                  fullWidth
                  error={touched.clientChangeContent && errors.clientChangeContent}
                  helperText={touched.clientChangeContent && errors.clientChangeContent}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Typography variant="h6">自己評価</Typography>
            </Grid>

            {[
              { name: 'workQuality', label: '仕事の質' },
              { name: 'workQuantity', label: '仕事の量' },
              { name: 'clientRelationship', label: '客先/顧客との信頼関係構築' },
              { name: 'communication', label: 'コミュニケーション' },
              { name: 'greetingAndLanguage', label: '相手に伝わる挨拶、相応しい言葉遣い' },
              { name: 'proactivity', label: '積極性、向上心' },
              { name: 'responsibility', label: '責任感' },
              { name: 'cooperation', label: '協調性' },
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item.name}>
                {/* <FormControl fullWidth error={Boolean(touched[item.name] && errors[item.name])}>
                  <InputLabel>{item.label}</InputLabel>
                  <Field as={Select} name={item.name}>
                    <MenuItem value="優秀">優秀</MenuItem>
                    <MenuItem value="良好">良好</MenuItem>
                    <MenuItem value="普通">普通</MenuItem>
                    <MenuItem value="要改善">要改善</MenuItem>
                  </Field>
                  <FormHelperText>{Boolean(touched[item.name] && errors[item.name])}</FormHelperText>
                </FormControl> */}
              </Grid>
            ))}

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="internalInteraction"
                label="社内交流"
                multiline
                rows={4}
                fullWidth
                error={touched.internalInteraction && errors.internalInteraction}
                helperText={touched.internalInteraction && errors.internalInteraction}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="skillAcquisitionEfforts"
                label="幅広いスキルの習得に対する今月の取組み"
                multiline
                rows={4}
                fullWidth
                   error={touched.skillAcquisitionEfforts && errors.skillAcquisitionEfforts}
                   helperText={touched.skillAcquisitionEfforts && errors.skillAcquisitionEfforts}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="informationProvision"
                label="情報提供活動"
                multiline
                rows={4}
                fullWidth
                error={touched.informationProvision && errors.informationProvision}
                helperText={touched.informationProvision && errors.informationProvision}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="internalProposals"
                label="社内提案"
                multiline
                rows={4}
                fullWidth
                error={touched.internalProposals && errors.internalProposals}
                helperText={touched.internalProposals && errors.internalProposals}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="complaints"
                label="業務に対する不満および問題点、改善希望"
                multiline
                rows={4}
                fullWidth
                error={touched.complaints && errors.complaints}
                helperText={touched.complaints && errors.complaints}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="freeComments"
                label="自由コメント欄"
                multiline
                rows={4}
                fullWidth
                error={touched.freeComments && errors.freeComments}
                helperText={touched.freeComments && errors.freeComments}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                提出
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default MonthlyReportForm;