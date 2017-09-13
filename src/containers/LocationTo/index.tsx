/**
 * Location To
 * 打开指定链接
 */
import React from 'react'
import { observer } from 'mobx-react'
import { Helmet } from 'react-helmet'
import styled from 'utils/styled-components'
import { observable } from 'mobx'
import Code from 'components/Code'
import H2 from 'components/H2'
import DemoSection from 'components/DemoSection'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import api from '@gdjiami/gzb-jssdk'

const Button = styled(RaisedButton)`margin-left: 1em;`

interface Props {
  className?: string
}

@observer
export default class LocationTo extends React.Component<Props> {
  @observable private value: string = 'http://mygzb.com'
  public render() {
    return (
      <div className={this.props.className}>
        <Helmet>
          <title>setTitle</title>
        </Helmet>
        <H2>打开指定链接</H2>
        <DemoSection>
          <p>当showModel为outer时使用系统浏览器打开指定链接，当showModel为inner时在应用内打开</p>
          <TextField
            hintText="输入URL"
            value={this.value}
            onChange={this.handleChange}
          />
          <Button label="跳转(Outer)" onClick={this.goOuter} />
          <Button label="跳转(inner)" onClick={this.goInner} />
        </DemoSection>
        <DemoSection>
          <H2>示例代码</H2>
          <Code>
            {`
\`\`\`typescript
import Api from '@gdjiami/gzb-jssdk'
const api = Api()
const url = 'http://mygzb.com'
// 快捷方式， 以默认的outer方式打开链接
api.locationTo(url)
// 等价于
api.locationTo({ url, showModel: 'outer' })

// 应用打开
api.locationTo({ url, showModel: 'inner' })
\`\`\`
          `}
          </Code>
        </DemoSection>
        <DemoSection>
          <H2>文档</H2>
        </DemoSection>
      </div>
    )
  }

  private handleChange = (evt: React.ChangeEvent<{ value: string }>) => {
    this.value = evt.target.value
  }

  private goOuter = () => {
    api().locationTo({
      url: this.value,
      showMode: 'outer',
    })
  }

  private goInner = () => {
    api().locationTo({
      url: this.value,
      showMode: 'inner',
    })
  }
}
