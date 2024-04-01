<h2>
Burnbar  
</h2>
<p>
Burnbar can be a separate component because it entirely fulfils the separate utility. executeBurn is a function that is being used in more than two components. It can either be created as a common util function or injected as a prop from the parent component. I have chosen the second option.
</p>

<h2>BurnStartContainer</h2>
<p>
  The BurnStartContainer is a separate folder created which contains three components. 
</p>

<ol>
  <li>
    <h3>Topbar.tsx</h3>
<p>TopBar component takes openChainModal, walletChain, suppliesChain and tokenAddress as a prop. This is wrapped in a component taking into account its utility in the app. Other components includes</p>
  </li>
 <li>
    <h3>SupplyBar.tsx</h3>
  </li>
 <li>
    <h3>SupplyLabelList.tsx</h3>
  </li>
</ol>

<p>In this way, I have achieved the readability and maintainability of the file. As these components are reusable, they can be used in different files which will in turn help in achieving scalability of the code.</p>
