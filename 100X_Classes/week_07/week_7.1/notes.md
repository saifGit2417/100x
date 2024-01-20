single page applications > go though theory , how its is used to be done , and now how its getting done
client side bundle
client side routing

resct router dom > npm for routing

window.location will load all html css and js , it will not meet the expectations of single page applications

always use useNavigate or navlink component with to attribute

useNavigate and link all these only work who is wrapped inside browser router component

 <NavLink to="/dashboard">
        <button>go to dashboard</button>
 </NavLink>
 <br />

<button
onClick={() => {
window.location.href = "/dashboard";
}}
>
go to dashboard uisng location
</button>
<br />

<button
 onClick={() => {
 navigate("/dashboard");
}}
 >
go to dashboard uisng navigate
</button>
