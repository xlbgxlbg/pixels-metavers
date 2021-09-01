import * as React from "react";
import * as blockies from "blockies-ts";
import styled from "styled-components";

interface IBlockieStyleProps {
  size?: number;
}

interface IBlockieProps extends IBlockieStyleProps {
  address: string;
}

const SBlockieWrapper = styled.div<IBlockieStyleProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
`;

const Blockie = (props: IBlockieProps) => {
  
  return (
    <SBlockieWrapper {...props} size={props.size}>
    </SBlockieWrapper>
  );
};

Blockie.defaultProps = {
  address: "0x0000000000000000000000000000000000000000",
  size: 0,
};

export default Blockie;
