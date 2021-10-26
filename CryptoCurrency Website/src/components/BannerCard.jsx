/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react'

import { CgArrowsExchangeV } from 'react-icons/cg'
import { GoPrimitiveDot } from 'react-icons/go'
import { Select, Input, Tabs } from 'antd'
import { RiseOutlined, CreditCardOutlined } from '@ant-design/icons'

const BannerCard = () => {
  const inputRef = useRef(null)
  const { TabPane } = Tabs

  const { Option } = Select
  function onChange() {}

  function onBlur() {}

  function onFocus() {}

  function onSearch() {}

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])
  const getTabOneTitle = () => (
    <span className="flex gap-2 items-center justify-center">
      Exchange Crypto <RiseOutlined />
    </span>
  )
  const getTabTwoTitle = () => (
    <span className="flex gap-2 items-center justify-center ">
      Buy/Sell Crypto <CreditCardOutlined />
    </span>
  )

  return (
    <Tabs type="card" className="bg-formbg banner-nav ">
      <TabPane tab={getTabOneTitle()} className="p-4 exchange-tab" key="1">
        <div className="relative mb-4">
          <div className="w-full bg-formbg flex flex-col gap-2 ">
            <div className="w-full flex ">
              <div className="banner-select flex ">
                <div className="flex flex-col px-6 py-2 bg-formtext rounded-lg border border-transparent  ">
                  <span htmlFor="name" className="ml-2 text-white">
                    You Send
                  </span>
                  <Input
                    ref={inputRef}
                    className=" bg-transparent outline-none border-none text-yellow-500 text-2xl focus:shadow-none"
                    size="medium"
                  />
                </div>

                <Select
                  showSearch
                  placeholder=" Coin"
                  optionFilterProp="children"
                  size="large"
                  style={{ width: 150 }}
                  listHeight={250}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">BitCoin</Option>
                  <Option value="lucy">Ethereum</Option>
                  <Option value="tom">LiteCoin</Option>
                </Select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center">
                <span className="flex items-center gap-1 text-white">
                  <GoPrimitiveDot className=" text-green-500 " /> No extra fee
                </span>
                <span className="flex items-center gap-1 text-white">
                  <GoPrimitiveDot className=" text-green-500" />
                  Estimated Rate
                </span>
              </div>
              <CgArrowsExchangeV className="text-green-500 text-3xl border cursor-pointer border-green-50 rounded" />
            </div>
            <div className="w-full flex">
              <div className="banner-select flex ">
                <div className="flex flex-col px-6 py-2 bg-formtext rounded-lg border border-transparent">
                  <span htmlFor="name" className="ml-2 text-white">
                    You Get
                  </span>
                  <Input
                    className=" bg-transparent outline-none border-none text-yellow-500 text-2xl focus:shadow-none"
                    size="medium"
                  />
                </div>

                <Select
                  showSearch
                  placeholder=" Coin"
                  optionFilterProp="children"
                  size="large"
                  style={{ width: 150 }}
                  listHeight={250}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">BitCoin</Option>
                  <Option value="lucy">Ethereum</Option>
                  <Option value="tom">LiteCoin</Option>
                </Select>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-white  mt-3 bg-green-600 w-full border-0 py-2 px-8 focus:outline-none  rounded text-lg"
          >
            Exchange
          </button>
        </div>
      </TabPane>
      <TabPane tab={getTabTwoTitle()} key="2" className="p-4 buy-sell-tab">
        <div className="relative mb-4">
          <div className="w-full bg-formbg flex flex-col gap-2 ">
            <div className="w-full flex ">
              <div className="banner-select flex ">
                <div className="flex flex-col px-6 py-2 bg-formtext rounded-lg border border-transparent ">
                  <span htmlFor="name" className="ml-2 text-white">
                    You Pay
                  </span>
                  <Input
                    className=" bg-transparent outline-none border-none text-yellow-500 text-2xl focus:shadow-none"
                    size="medium"
                  />
                </div>

                <Select
                  showSearch
                  placeholder=" Currency"
                  optionFilterProp="children"
                  size="large"
                  style={{ width: 150 }}
                  listHeight={250}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">USD</Option>
                  <Option value="lucy">INR</Option>
                  <Option value="tom">EURO</Option>
                </Select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center">
                <span className="flex items-center gap-1 text-white">
                  <GoPrimitiveDot className=" text-green-500 " /> No extra fee
                </span>
                <span className="flex items-center gap-1 text-white">
                  <GoPrimitiveDot className=" text-green-500" />
                  Estimated Rate
                </span>
              </div>
              <CgArrowsExchangeV className="text-green-500 text-3xl border cursor-pointer border-green-50 rounded" />
            </div>
            <div className="w-full flex">
              <div className="banner-select flex ">
                <div className="flex flex-col px-6 py-2 bg-formtext rounded-lg border border-transparent ">
                  <span htmlFor="name" className="ml-2 text-white">
                    You Get
                  </span>
                  <Input
                    className=" bg-transparent outline-none border-none text-yellow-500 text-2xl focus:shadow-none"
                    size="medium"
                  />
                </div>

                <Select
                  showSearch
                  placeholder=" Coin"
                  optionFilterProp="children"
                  size="large"
                  style={{ width: 150 }}
                  listHeight={250}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">BitCoin</Option>
                  <Option value="lucy">Ethereum</Option>
                  <Option value="tom">LiteCoin</Option>
                </Select>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-white  mt-3 bg-green-600 w-full border-0 py-2 px-8 focus:outline-none  rounded text-lg"
          >
            Exchange
          </button>
        </div>
      </TabPane>
    </Tabs>
  )
}

export default BannerCard
