import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { monthlyReportsByEmailAndReportMonth } from '../../../graphql/queries';
import { Grid, Typography } from '@mui/material';

const client = generateClient();

const History: React.FC = () => {
  // DBからログインしているユーザーのemailを使用して検索して表示する

  // ログインしているユーザーのemailを取得する関数
  const getUserEmail = () => {
    // ここにユーザーのemailを取得するロジックを追加
  };

  // ユーザーのemailを取得
  const userEmail = getUserEmail();

  // fetchMonthlyReports内で取得したデータをstateに保存して表示する
  const [monthlyReports, setMonthlyReports] = useState([]);

  // useEffect内でemailを使ってデータを取得する
  useEffect(() => {
    console.log('test');
    const fetchMonthlyReports = async () => {
      try {
        const response = await client.graphql({ query: monthlyReportsByEmailAndReportMonth });
        setMonthlyReports(response.data.monthlyReportsByEmailAndReportMonth.items as never[]);
        // 取得したデータを処理するコードを追加
      } catch (error) {
        console.error('Error fetching monthly reports:', error);
      }
    };

    fetchMonthlyReports();
  }, [userEmail]);

  // 月報データを月ごとに表示する
  return (
    <div>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
        履歴
        </Typography>
      </Grid>
      {monthlyReports.map((report: any) => (
        <div key={report.id}>
          <p>{report.reportMonth}</p>
          <p>{report.someOtherProperty}</p>
        </div>
      ))}
    </div>
  );
};
export default History;
