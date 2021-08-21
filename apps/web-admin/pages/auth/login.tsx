import { Button } from '@repo/ui-antd'
import { NP } from '../../utils/types'
import { wrapAuthLayout } from '../../components/layout/auth/auth-layout'
import { useRouter } from 'next/router'
import { AuthCard } from '../../components/auth-card/auth-card'
import { Input, Form, Checkbox } from 'antd'
//
const Page: NP = () => {
  const router = useRouter()

  return (
    <div>
      <AuthCard
        title={'Login'}
        submitButtonProps={{
          children: 'Login',
          onClick: () => router.push('/dashboard')
        }}
      >
        <Form layout="vertical">
          <Form.Item label="E-mail">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me!</Checkbox>
          </Form.Item>
        </Form>
      </AuthCard>
    </div>
  )
}

Page.getLayout = wrapAuthLayout

export default Page
